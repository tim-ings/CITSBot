import fetch from 'node-fetch';
import { AcademicWeeksParser, AcademicCalendarService, AcademicDeadlinesParser, AcademicWeek, AcademicCalendar, Deadline } from './types';
import { getWeekIndex } from './week';

const TEACHING_WEEKS_URL = 'https://ipoint.uwa.edu.au/app/answers/detail/a_id/1405/~/2016-dates-and-teaching-weeks';
const CS_MARKS_URL = 'https://secure.csse.uwa.edu.au/run/cssubmit';

const zip = <T1, T2>(arr1: T1[], arr2: T2[]): [T1, T2][] => arr1.map((_, idx) => [arr1[idx], arr2[idx]]);

export const academicCalendarService = (weeksParser: AcademicWeeksParser, deadlinesParser: AcademicDeadlinesParser, filterPostgrad = true): AcademicCalendarService => ({
  fetchCalendar: async () => {
    const fetchWeeks = async () => {
      const weeksResult = await fetch(TEACHING_WEEKS_URL);
      const weeksHtml = await weeksResult.text();
      return weeksParser.parseWeeks(weeksHtml);
    }

    const fetchDeadlines = async () => {
      const unitsPageResult = await fetch(CS_MARKS_URL);
      const unitsPageHtml = await unitsPageResult.text();
      const unitLinks = deadlinesParser.parseUnitLinks(unitsPageHtml).filter(({ code }) => !filterPostgrad || Number(code.slice('CITS'.length)) < 4000);
      const unitCodes = unitLinks.map(({ code }) => code);

      const deadlineResults = await Promise.all(unitLinks.map(({ link }) => fetch(link)));
      const deadlineHtml = await Promise.all(deadlineResults.map(result => result.text()));
      return zip(unitCodes, deadlineHtml).reduce<Deadline[]>((deadlines, [code, html]) => [...deadlines, ...deadlinesParser.parseUnitDeadlines(code, html)], []);
    }
    
    const weeks = await fetchWeeks();
    const deadlines = await fetchDeadlines();
    
    const calendar: AcademicCalendar = { weeks }
    deadlines.forEach(deadline => calendar.weeks[getWeekIndex(deadline.date)].deadlines.push(deadline));

    return calendar;
  },
});
