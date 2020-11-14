import { academicWeeksParser } from './weeks-parser';
import { AcademicWeek } from './types';

describe('weeks-parser', () => {
  const now = new Date('2020-01-01');
  const parser = academicWeeksParser(() => now);

  it('should parse the raw html into academic weeks', () => {
    expect(parser.parseWeeks(rawHtml)).toEqual(parsedCalendar);
  });
});

const parsedCalendar: Record<string, AcademicWeek> = {
	['2020-02-24']: {
		type: 'teaching',
		week: 1,
		semester: 1,
		date: new Date('2020-02-24T00:00:00.000Z'),
		deadlines: [],
	},
	['2020-03-02']: {
		type: 'teaching',
		week: 2,
		semester: 1,
		date: new Date('2020-03-02T00:00:00.000Z'),
		deadlines: [],
	},
	['2020-03-09']: {
		type: 'teaching',
		week: 3,
		semester: 1,
		date: new Date('2020-03-09T00:00:00.000Z'),
		deadlines: [],
	},
	['2020-03-16']: {
		type: 'teaching',
		week: 4,
		semester: 1,
		date: new Date('2020-03-16T00:00:00.000Z'),
		deadlines: [],
	},
	['2020-03-23']: {
		type: 'teaching',
		week: 5,
		semester: 1,
		date: new Date('2020-03-23T00:00:00.000Z'),
		deadlines: [],
	},
	['2020-03-30']: {
		type: 'teaching',
		week: 6,
		semester: 1,
		date: new Date('2020-03-30T00:00:00.000Z'),
		deadlines: [],
	},
	['2020-04-06']: {
		date: new Date('2020-04-06T00:00:00.000Z'),
		type: 'study-break',
		deadlines: [],
	},
	['2020-04-13']: {
		date: new Date('2020-04-13T00:00:00.000Z'),
		type: 'study-break',
		deadlines: [],
	},
	['2020-04-20']: {
		type: 'teaching',
		week: 7,
		semester: 1,
		date: new Date('2020-04-20T00:00:00.000Z'),
		deadlines: [],
	},
	['2020-04-27']: {
		type: 'teaching',
		week: 8,
		semester: 1,
		date: new Date('2020-04-27T00:00:00.000Z'),
		deadlines: [],
	},
	['2020-05-04']: {
		type: 'teaching',
		week: 9,
		semester: 1,
		date: new Date('2020-05-04T00:00:00.000Z'),
		deadlines: [],
	},
	['2020-05-11']: {
		type: 'teaching',
		week: 10,
		semester: 1,
		date: new Date('2020-05-11T00:00:00.000Z'),
		deadlines: [],
	},
	['2020-05-18']: {
		type: 'teaching',
		week: 11,
		semester: 1,
		date: new Date('2020-05-18T00:00:00.000Z'),
		deadlines: [],
	},
	['2020-05-25']: {
		type: 'teaching',
		week: 12,
		semester: 1,
		date: new Date('2020-05-25T00:00:00.000Z'),
		deadlines: [],
	},
	['2020-06-01']: {
		date: new Date('2020-06-01T00:00:00.000Z'),
		type: 'study-break',
		deadlines: [],
	},
	['2020-06-08']: {
		date: new Date('2020-06-08T00:00:00.000Z'),
		type: 'exam',
		deadlines: [],
	},
	['2020-06-15']: {
		date: new Date('2020-06-15T00:00:00.000Z'),
		type: 'exam',
		deadlines: [],
	},
	['2020-07-27']: {
		type: 'teaching',
		week: 1,
		semester: 2,
		date: new Date('2020-07-27T00:00:00.000Z'),
		deadlines: [],
	},
	['2020-08-03']: {
		type: 'teaching',
		week: 2,
		semester: 2,
		date: new Date('2020-08-03T00:00:00.000Z'),
		deadlines: [],
	},
	['2020-08-10']: {
		type: 'teaching',
		week: 3,
		semester: 2,
		date: new Date('2020-08-10T00:00:00.000Z'),
		deadlines: [],
	},
	['2020-08-17']: {
		type: 'teaching',
		week: 4,
		semester: 2,
		date: new Date('2020-08-17T00:00:00.000Z'),
		deadlines: [],
	},
	['2020-08-24']: {
		type: 'teaching',
		week: 5,
		semester: 2,
		date: new Date('2020-08-24T00:00:00.000Z'),
		deadlines: [],
	},
	['2020-08-31']: {
		type: 'teaching',
		week: 6,
		semester: 2,
		date: new Date('2020-08-31T00:00:00.000Z'),
		deadlines: [],
	},
	['2020-09-07']: {
		type: 'teaching',
		week: 7,
		semester: 2,
		date: new Date('2020-09-07T00:00:00.000Z'),
		deadlines: [],
	},
	['2020-09-14']: {
		type: 'teaching',
		week: 8,
		semester: 2,
		date: new Date('2020-09-14T00:00:00.000Z'),
		deadlines: [],
	},
	['2020-09-21']: {
		type: 'teaching',
		week: 9,
		semester: 2,
		date: new Date('2020-09-21T00:00:00.000Z'),
		deadlines: [],
	},
	['2020-09-28']: {
		date: new Date('2020-09-28T00:00:00.000Z'),
		type: 'study-break',
		deadlines: [],
	},
	['2020-10-05']: {
		type: 'teaching',
		week: 10,
		semester: 2,
		date: new Date('2020-10-05T00:00:00.000Z'),
		deadlines: [],
	},
	['2020-10-12']: {
		type: 'teaching',
		week: 11,
		semester: 2,
		date: new Date('2020-10-12T00:00:00.000Z'),
		deadlines: [],
	},
	['2020-10-19']: {
		type: 'teaching',
		week: 12,
		semester: 2,
		date: new Date('2020-10-19T00:00:00.000Z'),
		deadlines: [],
	},
	['2020-10-26']: {
		date: new Date('2020-10-26T00:00:00.000Z'),
		type: 'study-break',
		deadlines: [],
	},
	['2020-11-02']: {
		date: new Date('2020-11-02T00:00:00.000Z'),
		type: 'exam',
		deadlines: [],
	},
	['2020-11-09']: {
		date: new Date('2020-11-09T00:00:00.000Z'),
		type: 'exam',
		deadlines: [],
	},
};

const rawHtml = `<!DOCTYPE html>
<html lang="en-AU">
<head>
    <meta charset="utf-8"/>
    <meta name="viewport" content="width=device-width" />
    <title>2020 undergraduate dates and teaching weeks - askUWA</title>
    <meta name="google-site-verification" content="Lxo0TTbWrLWwWDYgdNJ6_Hi8w1LB0T2r20erqMtwLYI" />
    <meta name="description" content="Find answers to your questions about the University of Western Australia. Online anytime for current students, future students, community and UWA staff." />    
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
    <!--[if lt IE 9]><script src="/euf/core/static/html5.js"></script><![endif]-->
	<link href='//fonts.googleapis.com/css?family=Source+Sans+Pro' rel='stylesheet' type='text/css'>             
	<link rel="stylesheet" href="//code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css">			                       
    <link rel="search" type="application/opensearchdescription+xml" title="Support Home Page Search" href="/ci/browserSearch/desc/https%3A%2F%2Fipoint.uwa.edu.au%2Fapp%2Fanswers%2Flist%2Fkw%2F%7BsearchTerms%7D/Support+Home+Page+Search/Support+Home+Page+Search/%2Feuf%2Fassets%2Fimages%2Ficons%2Ffavicon_browserSearchPlugin.ico"/>
    <link rel='canonical' href='https://ipoint.uwa.edu.au/app/answers/detail/a_id/1405/~/2020-undergraduate-dates-and-teaching-weeks'/>
<style type='text/css'>
 <!-- 
.rn_ScreenReaderOnly{position:absolute; height:1px; left:-10000px; overflow:hidden; top:auto; width:1px;}
.rn_Hidden{display:none !important;}
 --></style>
<base href='https://ipoint.uwa.edu.au/euf/generated/optimized/1603846217/themes/askuwa5_cp3.8/'/>
<link href='/euf/generated/optimized/1603846217/templates/standard.themes.askuwa5_cp3.8.SITE.css' rel='stylesheet' type='text/css' media='all'/>
<link href='/euf/generated/optimized/1603846217/templates/standard.themes.askuwa5_cp3.8.css' rel='stylesheet' type='text/css' media='all'/>
<link href='/euf/generated/optimized/1603846217/pages/answers/detail.themes.askuwa5_cp3.8.css' rel='stylesheet' type='text/css' media='all'/>

    <!-- CUSTOM UWA -->
	<script type="text/javascript" src="//static.weboffice.uwa.edu.au/visualid/scripts/id-core.js?r11"></script>
	<script src="//ajax.googleapis.com/ajax/libs/jquery/1.10.1/jquery.min.js"></script>
	<script type="text/javascript" src="/euf/assets/themes/askuwa5_cp3.8/javascript/custom-js.js"></script>	
	<link rel="stylesheet" type="text/css" href="//static.weboffice.uwa.edu.au/visualid/styles/id-core.css?r54" media="all" />
    <link rel="stylesheet" type="text/css" href="//static.weboffice.uwa.edu.au/visualid/styles/id-nonvisual.css" media="aural, braille" />
    <link rel="stylesheet" type="text/css" href="//static.weboffice.uwa.edu.au/visualid/styles/id-print.css" media="print" />
	<link rel="stylesheet" type="text/css" href="//static.weboffice.uwa.edu.au/visualid/styles/sites/askuwa/askuwa.css" />    
	<link rel="icon" href="//www.uwa.edu.au/favicon.ico" type="image/png"/>
	<link rel="stylesheet" href="//code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css">	
	<script type="text/javascript">
    $(document).ready(function() {
    //--- begin js
    	
    	var keywordtext1 = '#rn_KeywordText_5_Text';
        var keywordtext2 = '#rn_KeywordText_6_Text';
    	
    	$(keywordtext1).attr('placeholder','Search for an answer..');
    	$(keywordtext2).attr('placeholder','Search for an answer..');    	
    		
    	//Check email input for uwa addresses
    	$('#rn_TextInput_7_email').keyup(function() {checkEmail('#rn_TextInput_7_email');});
    	$('#rn_TextInput_7_email').blur(function() {checkEmail('#rn_TextInput_7_email');});	
    	$('#rn_TextInput_7_email').focus(function() {checkEmail('#rn_TextInput_7_email');});
    	
    	$('#rn_TextInput_12_email').keyup(function() {checkEmail('#rn_TextInput_12_email');});
    	$('#rn_TextInput_12_email').blur(function() {checkEmail('#rn_TextInput_12_email');});	
    	$('#rn_TextInput_12_email').focus(function() {checkEmail('#rn_TextInput_12_email');});
    	
    	//set the width of attachment file upload to lower for Firefox on Mac
    	$('#rn_FileAttachmentUpload2_17_FileInput').attr('size','25'); 
    	    	    	    	             		     
    //--- end js   
    });
    </script>
   <!-- /CUSTOM UWA -->   
</head>
<body class="yui-skin-sam yui3-skin-sam">
<div id="interfacechooser" class="mouseleave" style="position:relative;display:block;background:#E3B900;padding:10px;text-align:center;display:none" align="center">
	<span class="interfacechooserselected">Current Students</span>
	<span class="interfacechooserunselected">
		<a href="//ask.uwa.edu.au">Future Students</a>
	</span>
    <span class="interfacechooserunselected">
		<a href="//askuwacommunity.uwa.edu.au">Community</a>
	</span>
	<span class="interfacechooserunselected">
		<a href="//staff.ask.uwa.edu.au">UWA Staff</a>
	</span>
</div>
<div id="headercontainer" style="border-top: 3px solid #E3B900">
        <!--[if IE 6]><div class="ie6expander"><div class="ie6sizer"><![endif]-->
        <!-- The top, black bodied part of the header -->
        <div class="primary" style="max-width:1025px;">
            <div id="askuwa-interface-div">
		    <!-- DROP DOWN -->
		    <div class="askuwa-nav">
		        <ul class="no-js" style="text-align:right">
		            <li>
		                <a href="#" class="clicker2" style="border-radius:0px 0px 3px 3px;background:#E3B900;padding:9px;color:#FFF;font-size:1.25em;letter-spacing:0.08em;">Current Students <span id="interfacechooser_icon" style="font-size:1em" class="ion-chevron-down"></span></a>
		                		            </li>
		        </ul>
		    </div>
		    <!-- END DROP DOWN -->             
			</div> 
			<!-- LOGIN STATUS -->
			<div id="rn_LoginStatus">
                        <a href="/app/account/overview">Sign in to your Account »</a>&nbsp;
            </div>
			<!-- END LOGIN STATUS -->                               
            <a href="//uwa.edu.au"><img style="display: none;" id="print_header" alt="" src="https://static.weboffice.uwa.edu.au/visualid/graphics/uwacrest-print.gif">
            <!--<img src="https://static.weboffice.uwa.edu.au/visualid/sites/alpha/img/uwacrest-white.svg" onerror="this.src='https://static.weboffice.uwa.edu.au/visualid/sites/alpha/img/uwacrest-white.png'; this.onerror=null;" alt="The Univeristy of Western Australia" id="uwa-new-logo" />-->
            <img src="//static.weboffice.uwa.edu.au/visualid/sites/alpha/img/uwacrest-white.png" onerror="this.src='//static.weboffice.uwa.edu.au/visualid/sites/alpha/img/uwacrest-white.png'; this.onerror=null;" alt="The University of Western Australia" id="uwa_crest" /></a>
            <!--<div id="headertitle" style="position:absolute; top:0px; right:0px; z-index:10;">Ask UWA: answers online anytime</div>-->
        </div><!--end .primary--> 
        <!--[if IE 6]></div></div><![endif]--><!--end .ie6expander, .ie6sizer-->
    </div>
    <!-- BEGIN ASKUWA NOTICES -->
    <div id="askuwa_notice" align="center" style="text-align:center;background:#ffff66;padding:15px;font-size:16px;font-weight:bold;display:none">
	    <span style="font-weight:bold;color:red">Important Notice:</span> <span id="askuwa_notice_msg"></span>
	    <div style="float:right"><a href="#" onclick="$('#askuwa_notice').hide()">Close</a></div>
	</div>
	<script>
	if( $('#askuwa_notice_msg').is(':empty') ){
		$('#askuwa_notice').hide();
	}else{
		$('#askuwa_notice').show();
	}
	</script>
	<!-- END NOTICES -->
<div id="rn_Navigation">
<div id="locallinks">
</div><!--end #locallinks--> 
<div id="rn_NavigationContainer">
            <div id="rn_NavigationBar" role="navigation">
            <ul>
                <!--<li><rn:widget path="navigation/NavigationTab" label_tab="Support Home" link="/app/answers/list" pages="home, "/></li>-->
                <li><span id="rn_NavigationTab_1" class="rn_NavigationTab">
    <a class="rn_SelectedTab" href="/app/answers/list/session/L2F2LzEvdGltZS8xNjA1MDExODI4L2dlbi8xNjA1MDExODI4L3NpZC9mVWhDQ1NYSU9HTDlpRnR2aDRLanhZZ1U5bWlzeU8yVGlqa3RKa2xiNFhyUDdfOW01X3NOSm9najByX1h0cE1ES05aWTlPRkVYZ19za0tuRVBYbTZoNEI4TDllTzEzSEQ0UXMlN0VZQm92RndGNSU3RVpJY19fR2pISmdnJTIxJTIx" target="_self" aria-label="FAQs selected">
        <span>FAQs</span>
    </a>
</span>
</li>
                                <li><span id="rn_NavigationTab_2" class="rn_NavigationTab">
    <a class="" href="/app/ask/session/L2F2LzEvdGltZS8xNjA1MDExODI4L2dlbi8xNjA1MDExODI4L3NpZC9mVWhDQ1NYSU9HTDlpRnR2aDRLanhZZ1U5bWlzeU8yVGlqa3RKa2xiNFhyUDdfOW01X3NOSm9najByX1h0cE1ES05aWTlPRkVYZ19za0tuRVBYbTZoNEI4TDllTzEzSEQ0UXMlN0VZQm92RndGNSU3RVpJY19fR2pISmdnJTIxJTIx" target="_self" aria-label="">
        <span>Email Us</span>
    </a>
</span>
</li>
                <li style="border-right:0"><span id="rn_NavigationTab_3" class="rn_NavigationTab">
    <a id="rn_NavigationTab_3_Link" class=" rn_DropDown" href="/app/account/overview/session/L2F2LzEvdGltZS8xNjA1MDExODI4L2dlbi8xNjA1MDExODI4L3NpZC9mVWhDQ1NYSU9HTDlpRnR2aDRLanhZZ1U5bWlzeU8yVGlqa3RKa2xiNFhyUDdfOW01X3NOSm9najByX1h0cE1ES05aWTlPRkVYZ19za0tuRVBYbTZoNEI4TDllTzEzSEQ0UXMlN0VZQm92RndGNSU3RVpJY19fR2pISmdnJTIxJTIx" target="_self">
        <span>Your Account</span>
        <em id="rn_NavigationTab_3_DropdownButton" class="rn_ButtonOff"></em>
    </a>
    <span id="rn_NavigationTab_3_SubNavigation" class="rn_SubNavigation rn_ScreenReaderOnly">
            <a href="/app/account/overview" target="_self">Account Overview</a>
            <a href="/app/account/questions/list" target="_self">Support History</a>
            <a href="/app/account/profile" target="_self">Account Settings</a>
        </span>
</span>
</li>
            </ul>
        </div>
    </div>   
</div> 
<div id="rn_Container" >
    <div id="rn_SkipNav"><a href="#rn_MainContent">Skip Navigation</a></div>
    <div id="rn_Header" role="banner">
    <noscript><h1>Scripting must be enabled to use this site.</h1></noscript>
        <!--<div id="rn_Logo"><a href="/app/answers/list/session/L2F2LzEvdGltZS8xNjA1MDExODI4L2dlbi8xNjA1MDExODI4L3NpZC9mVWhDQ1NYSU9HTDlpRnR2aDRLanhZZ1U5bWlzeU8yVGlqa3RKa2xiNFhyUDdfOW01X3NOSm9najByX1h0cE1ES05aWTlPRkVYZ19za0tuRVBYbTZoNEI4TDllTzEzSEQ0UXMlN0VZQm92RndGNSU3RVpJY19fR2pISmdnJTIxJTIx"><span class="rn_LogoTitle">Support <span class="rn_LogoTitleMinor">Centre</span></span></a></div>-->
    </div>
        <div id="rn_Body">
        <div id="rn_MainColumn" role="main">
            <a id="rn_MainContent"></a>
<div id="rn_mastheadbar">
	<table width="95%">
	<tr>
	<td width="50%" align="left" style="vertical-align:middle"> 
	<div class="rn_back">
       <a href="javascript:history.go(-1)"><span class="ion-ios-arrow-back" style="font-size:1.6em;vertical-align:middle;padding-right:5px"></span><strong>Back</strong></a>
	</div>
	</td>
	<td width="50%" align="right" style="vertical-align:middle">
        <div id="detail-searchbox">
            <form id="detail-searchform">
                <input type="text" name="txtSearchAskUWA" id="txtSearchAskUWA" placeholder="Search askUWA" />
                <button id="btnSearch" type="submit" style="float:right"><i class="ion-ios-search"></i></button>
            </form>
            <script>
                $("#detail-searchform").submit(function() {
                    window.location.href = "/app/answers/list/st/5/kw/"+$('#txtSearchAskUWA').val();
                    return false;
                });	
            </script>	    
        </div>
	</td>
	</tr>
	</table>
</div>
<div id="rn_PageContent" class="rn_AnswerDetail" style="float:left;width:760px">
    <div id="rn_PageTitle" class="rn_AnswerDetail">
    <h1 id="rn_Summary" class="ans-summery">
       2020 undergraduate dates and teaching weeks    </h1>
    <div id="ans_desc"><div>What are the undergraduate teaching dates in 2020?</div>
</div>    
    </div>
    <div id="rn_AnswerText">
        <p style="FONT-SIZE: 12pt">This table lists the teaching days and weeks for the <span style="font-weight:bold;">Undergraduate timetable</span> and&nbsp;can be downloaded via the associated attachment at the bottom of this page or you can&nbsp;<a href="http://www.bits.uwa.edu.au/it-help/email/staff/ecs/uwa-events-calendar" style="TEXT-DECORATION: underline" target="_blank">add the digital calendar</a>&nbsp;to your device or email client.</p>

<p style="FONT-SIZE: 12pt">Dates for non-standard teaching periods are available from the <a href="https://www.student.uwa.edu.au/course/dates/important" target="_blank">Important Dates</a> page.</p>

<p style="FONT-SIZE: 12pt"><span style="font-weight:bold;">*Important Note</span>: the Exam period is subject to change. Exams will commence on Saturday 6 June and best endeavours will be made to be completed in a timely manner. &nbsp;Your personal exam timetable is published five weeks before the <a href="https://www.uwa.edu.au/students/my-course/exams">exam period</a> (from 4 May) on <a href="https://www.student.uwa.edu.au/course/studentconnect">studentConnect</a>.</p>

<table border="1">
	<tbody>
		<tr align="center">
			<td valign="middle"><font size="-1"><b style="FONT-SIZE: 12pt">Week Number</b></font></td>
			<td valign="middle"><font size="-1"><b style="FONT-SIZE: 12pt">Week Commencing</b></font></td>
			<td valign="middle"><font size="-1"><b style="FONT-SIZE: 12pt">Semester / Week</b></font></td>
			<td valign="middle"><font size="-1"><b style="FONT-SIZE: 12pt">Notes</b></font></td>
		</tr>
		<tr align="center" valign="top">
			<td><font style="FONT-SIZE: 12pt">1</font></td>
			<td>
			<p align="left"><font style="FONT-SIZE: 12pt">Monday&nbsp;30 December</font></p>
			</td>
			<td><font style="FONT-SIZE: 12pt">&nbsp;</font></td>
			<td>
			<p align="left"><br />
			</p>
			</td>
		</tr>
		<tr align="center" valign="top">
			<td><font style="FONT-SIZE: 12pt">2</font></td>
			<td>
			<p align="left"><font style="FONT-SIZE: 12pt">Monday 6&nbsp;January</font></p>
			</td>
			<td><font style="FONT-SIZE: 12pt">&nbsp;</font></td>
			<td style="text-align: left;"><span style="font-size: 16px;">University re-opens</span><font style="FONT-SIZE: 12pt">&nbsp;</font></td>
		</tr>
		<tr align="center" valign="top">
			<td><font style="FONT-SIZE: 12pt">3</font></td>
			<td>
			<p align="left"><font style="FONT-SIZE: 12pt">Monday 13&nbsp;January</font></p>
			</td>
			<td><font style="FONT-SIZE: 12pt">&nbsp;</font></td>
			<td><font style="FONT-SIZE: 12pt">&nbsp;</font></td>
		</tr>
		<tr align="center" valign="top">
			<td><font style="FONT-SIZE: 12pt">4</font></td>
			<td>
			<p align="left"><font style="FONT-SIZE: 12pt">Monday&nbsp;20&nbsp;January</font></p>
			</td>
			<td><font style="FONT-SIZE: 12pt">&nbsp;</font></td>
			<td>
			<p align="left"><br />
			</p>
			</td>
		</tr>
		<tr align="center" valign="top">
			<td><font style="FONT-SIZE: 12pt">5</font></td>
			<td>
			<p align="left"><font style="FONT-SIZE: 12pt">Monday&nbsp;27&nbsp;January</font></p>
			</td>
			<td><font style="FONT-SIZE: 12pt">&nbsp;</font></td>
			<td>
			<p align="left"><font style="FONT-SIZE: 12pt">Mon 27&nbsp;Jan - In lieu Australia Day (University Holiday) </font></p>
			</td>
		</tr>
		<tr align="center" valign="top">
			<td><font style="FONT-SIZE: 12pt">6</font></td>
			<td>
			<p align="left"><font style="FONT-SIZE: 12pt">Monday 3&nbsp;February</font></p>
			</td>
			<td><font style="FONT-SIZE: 12pt">&nbsp;</font></td>
			<td style="text-align: left;"><br />
			</td>
		</tr>
		<tr align="center" valign="top">
			<td><font style="FONT-SIZE: 12pt">7</font></td>
			<td>
			<p align="left"><font style="FONT-SIZE: 12pt">Monday 10&nbsp;February</font></p>
			</td>
			<td><font style="FONT-SIZE: 12pt">&nbsp;</font></td>
			<td><font style="FONT-SIZE: 12pt">&nbsp;</font></td>
		</tr>
		<tr align="center" valign="top">
			<td><font style="FONT-SIZE: 12pt">8</font></td>
			<td>
			<p align="left"><font style="FONT-SIZE: 12pt">Monday&nbsp;17&nbsp;February</font></p>
			</td>
			<td><font style="FONT-SIZE: 12pt">&nbsp;</font></td>
			<td><font style="FONT-SIZE: 12pt">&nbsp;</font></td>
		</tr>
		<tr align="center" valign="top">
			<td><font style="FONT-SIZE: 12pt">9</font></td>
			<td>
			<p align="left"><font style="FONT-SIZE: 12pt">Monday 24&nbsp;February</font></p>
			</td>
			<td><font style="FONT-SIZE: 12pt">Sem 1 / Wk 1</font></td>
			<td>
			<p align="left"><br />
			</p>
			</td>
		</tr>
		<tr align="center" valign="top">
			<td><font style="FONT-SIZE: 12pt">10</font></td>
			<td>
			<p align="left"><font style="FONT-SIZE: 12pt">Monday 2&nbsp;March</font></p>
			</td>
			<td><font style="FONT-SIZE: 12pt">Sem 1&nbsp;/ Wk 2</font></td>
			<td>
			<p align="left"><font style="FONT-SIZE: 12pt">Mon 2&nbsp;March - Labour Day (University Holiday)</font></p>
			</td>
		</tr>
		<tr align="center" valign="top">
			<td><font style="FONT-SIZE: 12pt">11</font></td>
			<td>
			<p align="left"><font style="FONT-SIZE: 12pt">Monday 9&nbsp;March</font></p>
			</td>
			<td><font style="FONT-SIZE: 12pt">Sem 1 / Wk 3</font></td>
			<td><br />
			</td>
		</tr>
		<tr align="center" valign="top">
			<td><font style="FONT-SIZE: 12pt">12</font></td>
			<td>
			<p align="left"><font style="FONT-SIZE: 12pt">Monday&nbsp;16&nbsp;March</font></p>
			</td>
			<td><font style="FONT-SIZE: 12pt">Sem 1 / Wk 4</font></td>
			<td>
			<p align="left"><br />
			</p>
			</td>
		</tr>
		<tr align="center" valign="top">
			<td><font style="FONT-SIZE: 12pt">13</font></td>
			<td>
			<p align="left"><font style="FONT-SIZE: 12pt">Monday 23&nbsp;March</font></p>
			</td>
			<td><font style="FONT-SIZE: 12pt">Sem 1 / Wk 5</font></td>
			<td>
			<p align="left"><br />
			</p>
			</td>
		</tr>
		<tr align="center" valign="top">
			<td><font style="FONT-SIZE: 12pt">14</font></td>
			<td>
			<p align="left"><font style="FONT-SIZE: 12pt">Monday&nbsp;30 March</font></p>
			</td>
			<td><font style="FONT-SIZE:12pt">Sem 1 / Wk 6</font></td>
			<td>
			<p align="left"><br />
			</p>
			</td>
		</tr>
		<tr align="center" valign="top">
			<td><font style="FONT-SIZE: 12pt">15</font></td>
			<td>
			<p align="left"><font style="FONT-SIZE: 12pt">Monday 6&nbsp;April</font></p>
			</td>
			<td><font style="FONT-SIZE:12pt"><strong>Study Break</strong></font></td>
			<td>
			<p align="left"><font style="FONT-SIZE:12pt">Tuition Free Week / Good Friday (University Holiday)</font></p>
			</td>
		</tr>
		<tr align="center" valign="top">
			<td><font style="FONT-SIZE: 12pt">16</font></td>
			<td>
			<p align="left"><font style="FONT-SIZE: 12pt">Monday&nbsp;13&nbsp;April</font></p>
			</td>
			<td><font style="FONT-SIZE:12pt"><strong>Study Break</strong></font></td>
			<td>
			<p align="left"><font style="FONT-SIZE: 12pt">Easter Monday (University Holiday)</font></p>
			</td>
		</tr>
		<tr align="center" valign="top">
			<td><font style="FONT-SIZE: 12pt">17</font></td>
			<td>
			<p align="left"><font style="FONT-SIZE: 12pt">Monday&nbsp;20&nbsp;April</font></p>
			</td>
			<td><font style="FONT-SIZE:12pt">Sem 1 / Wk 7</font></td>
			<td>
			<p align="left"><span style="font-size: 16px;">Online Classes Resume</span></p>
			</td>
		</tr>
		<tr align="center" valign="top">
			<td><font style="FONT-SIZE: 12pt">18</font></td>
			<td>
			<p align="left"><font style="FONT-SIZE: 12pt">Monday&nbsp;27 April</font></p>
			</td>
			<td><font style="FONT-SIZE: 12pt">Sem 1 / Wk 8</font></td>
			<td style="text-align: left;"><font style="FONT-SIZE:12pt">Mon 27 April - in lieu Anzac Day (University Holiday)</font></td>
		</tr>
		<tr align="center" valign="top">
			<td><font style="FONT-SIZE: 12pt">19</font></td>
			<td>
			<p align="left"><font style="FONT-SIZE: 12pt">Monday 4&nbsp;May</font></p>
			</td>
			<td><font style="FONT-SIZE: 12pt">Sem 1 / Wk 9</font></td>
			<td><br />
			</td>
		</tr>
		<tr align="center" valign="top">
			<td><font style="FONT-SIZE: 12pt">20</font></td>
			<td>
			<p align="left"><font style="FONT-SIZE: 12pt">Monday 11&nbsp;May</font></p>
			</td>
			<td><font style="FONT-SIZE: 12pt">Sem 1 / Wk 10</font></td>
			<td><br />
			</td>
		</tr>
		<tr align="center" valign="top">
			<td><font style="FONT-SIZE: 12pt">21</font></td>
			<td>
			<p align="left"><font style="FONT-SIZE: 12pt">Monday&nbsp;18 May</font></p>
			</td>
			<td><font style="FONT-SIZE: 12pt">Sem 1 / Wk 11</font></td>
			<td><br />
			</td>
		</tr>
		<tr align="center" valign="top">
			<td><font style="FONT-SIZE: 12pt">22</font></td>
			<td>
			<p align="left"><font style="FONT-SIZE: 12pt">Monday&nbsp;25 May</font></p>
			</td>
			<td><font style="FONT-SIZE:12pt">Sem 1 / Wk 12</font></td>
			<td><br />
			</td>
		</tr>
		<tr align="center" valign="top">
			<td><font style="FONT-SIZE: 12pt">23</font></td>
			<td>
			<p align="left"><font style="FONT-SIZE: 12pt">Monday 1&nbsp;June</font></p>
			</td>
			<td><font size="-1"><strong style="FONT-SIZE:12pt">Study Break</strong></font></td>
			<td>
			<p align="left"><font style="FONT-SIZE: 12pt">Mon 1&nbsp;June - WA Day (University Holiday)</font></p>
			</td>
		</tr>
		<tr align="center" valign="top">
			<td><font style="FONT-SIZE: 12pt">24</font></td>
			<td>
			<p align="left"><font style="FONT-SIZE: 12pt">Monday 8&nbsp;June</font></p>
			</td>
			<td>
			<p align="center"><font size="-1"><strong style="FONT-SIZE:12pt">Exams*</strong></font></p>
			</td>
			<td>
			<p align="left">&nbsp;</p>
			</td>
		</tr>
		<tr align="center" valign="top">
			<td><font style="FONT-SIZE: 12pt">25</font></td>
			<td>
			<p align="left"><font style="FONT-SIZE: 12pt">Monday&nbsp;15&nbsp;June</font></p>
			</td>
			<td>
			<p align="center"><font size="-1"><strong style="FONT-SIZE:12pt">Exams*</strong></font></p>
			</td>
			<td style="text-align: left;">&nbsp;</td>
		</tr>
		<tr align="center" valign="top">
			<td><font style="FONT-SIZE: 12pt">26</font></td>
			<td>
			<p align="left"><font style="FONT-SIZE: 12pt">Monday 22&nbsp;June</font></p>
			</td>
			<td><font style="FONT-SIZE: 12pt">&nbsp;</font></td>
			<td><font style="FONT-SIZE: 12pt">&nbsp;</font></td>
		</tr>
		<tr align="center" valign="top">
			<td><font style="FONT-SIZE: 12pt">27</font></td>
			<td>
			<p align="left"><font style="FONT-SIZE: 12pt">Monday&nbsp;29 June</font></p>
			</td>
			<td><font style="FONT-SIZE: 12pt">&nbsp;</font></td>
			<td>
			<p align="left"><font style="FONT-SIZE: 12pt">&nbsp;</font></p>
			</td>
		</tr>
		<tr align="center" valign="top">
			<td><font style="FONT-SIZE: 12pt">28</font></td>
			<td>
			<p align="left"><font style="FONT-SIZE: 12pt">Monday 6&nbsp;July</font></p>
			</td>
			<td><font style="FONT-SIZE: 12pt">&nbsp;</font></td>
			<td>
			<p align="left"><font style="FONT-SIZE: 12pt">&nbsp;</font></p>
			</td>
		</tr>
		<tr align="center" valign="top">
			<td><font style="FONT-SIZE: 12pt">29</font></td>
			<td>
			<p align="left"><font style="FONT-SIZE: 12pt">Monday 13&nbsp;July</font></p>
			</td>
			<td><font style="FONT-SIZE: 12pt">&nbsp;</font></td>
			<td style="text-align: left;"><br />
			</td>
		</tr>
		<tr align="center" valign="top">
			<td><font style="FONT-SIZE: 12pt">30</font></td>
			<td>
			<p align="left"><font style="FONT-SIZE: 12pt">Monday 20&nbsp;July</font></p>
			</td>
			<td><font style="FONT-SIZE: 12pt">&nbsp;</font></td>
			<td><font style="FONT-SIZE: 12pt">&nbsp;</font></td>
		</tr>
		<tr align="center" valign="top">
			<td><font style="FONT-SIZE: 12pt">31</font></td>
			<td>
			<p align="left"><font style="FONT-SIZE: 12pt">Monday 27&nbsp;July</font></p>
			</td>
			<td><font style="FONT-SIZE: 12pt">Sem 2 / Wk 1</font></td>
			<td><br />
			</td>
		</tr>
		<tr align="center" valign="top">
			<td><font style="FONT-SIZE: 12pt">32</font></td>
			<td>
			<p align="left"><font style="FONT-SIZE: 12pt">Monday 3&nbsp;August</font></p>
			</td>
			<td><font style="FONT-SIZE: 12pt">Sem 2 / Wk 2</font></td>
			<td><br />
			</td>
		</tr>
		<tr align="center" valign="top">
			<td><font style="FONT-SIZE: 12pt">33</font></td>
			<td>
			<p align="left"><font style="FONT-SIZE: 12pt">Monday 10&nbsp;August</font></p>
			</td>
			<td><font style="FONT-SIZE: 12pt">Sem 2 / Wk 3</font></td>
			<td><br />
			</td>
		</tr>
		<tr align="center" valign="top">
			<td><font style="FONT-SIZE: 12pt">34</font></td>
			<td>
			<p align="left"><font style="FONT-SIZE: 12pt">Monday 17&nbsp;August</font></p>
			</td>
			<td><font style="FONT-SIZE: 12pt">Sem 2 / Wk 4</font></td>
			<td><br />
			</td>
		</tr>
		<tr align="center" valign="top">
			<td><font style="FONT-SIZE: 12pt">35</font></td>
			<td>
			<p align="left"><font style="FONT-SIZE: 12pt">Monday 24&nbsp;August</font></p>
			</td>
			<td><font style="FONT-SIZE: 12pt">Sem 2 / Wk 5</font></td>
			<td><br />
			</td>
		</tr>
		<tr align="center" valign="top">
			<td><font style="FONT-SIZE: 12pt">36</font></td>
			<td>
			<p align="left"><font style="FONT-SIZE: 12pt">Monday&nbsp;31 August</font></p>
			</td>
			<td><font style="FONT-SIZE: 12pt">Sem 2 / Wk 6</font></td>
			<td><br />
			</td>
		</tr>
		<tr align="center" valign="top">
			<td><font style="FONT-SIZE: 12pt">37</font></td>
			<td>
			<p align="left"><font style="FONT-SIZE: 12pt">Monday 7&nbsp;September</font></p>
			</td>
			<td><font style="FONT-SIZE: 12pt">Sem 2 / Wk 7</font></td>
			<td><br />
			</td>
		</tr>
		<tr align="center" valign="top">
			<td><font style="FONT-SIZE: 12pt">38</font></td>
			<td>
			<p align="left"><font style="FONT-SIZE: 12pt">Monday 14&nbsp;September</font></p>
			</td>
			<td><font style="FONT-SIZE: 12pt">Sem 2 /Wk 8</font></td>
			<td><br />
			</td>
		</tr>
		<tr align="center" valign="top">
			<td><font style="FONT-SIZE: 12pt">39</font></td>
			<td>
			<p align="left"><font style="FONT-SIZE: 12pt">Monday 21&nbsp;September</font></p>
			</td>
			<td><font style="FONT-SIZE:12pt">Sem 2 /Wk 9</font></td>
			<td>
			<p align="left"><font size="-1"><font style="FONT-SIZE: 12pt">&nbsp;</font></font></p>
			</td>
		</tr>
		<tr align="center" valign="top">
			<td><font style="FONT-SIZE: 12pt">40</font></td>
			<td>
			<p align="left"><font style="FONT-SIZE: 12pt">Monday&nbsp;28 September</font></p>
			</td>
			<td><font size="-1"><strong style="FONT-SIZE:12pt">Study Break</strong></font></td>
			<td>
			<p align="left"><font size="-1"><font style="FONT-SIZE: 12pt">Mon 28 Sept - Queens B/Day (University Holiday)&nbsp;</font></font></p>
			</td>
		</tr>
		<tr align="center" valign="top">
			<td><font style="FONT-SIZE: 12pt">41</font></td>
			<td>
			<p align="left"><font style="FONT-SIZE: 12pt">Monday 5&nbsp;October</font></p>
			</td>
			<td><font style="FONT-SIZE: 12pt">Sem 2 / Wk 10</font></td>
			<td style="text-align: left;"><br />
			</td>
		</tr>
		<tr align="center" valign="top">
			<td><font style="FONT-SIZE: 12pt">42</font></td>
			<td>
			<p align="left"><font style="FONT-SIZE: 12pt">Monday 12&nbsp;October</font></p>
			</td>
			<td><font style="FONT-SIZE: 12pt">Sem 2 / Wk 11</font></td>
			<td><br />
			</td>
		</tr>
		<tr align="center" valign="top">
			<td><font style="FONT-SIZE: 12pt">43</font></td>
			<td>
			<p align="left"><font style="FONT-SIZE: 12pt">Monday 19&nbsp;October</font></p>
			</td>
			<td><font style="FONT-SIZE: 12pt">Sem 2 / Wk 12</font></td>
			<td><br />
			</td>
		</tr>
		<tr align="center" valign="top">
			<td><font style="FONT-SIZE: 12pt">44</font></td>
			<td>
			<p align="left"><font style="FONT-SIZE: 12pt">Monday&nbsp;26&nbsp;October</font></p>
			</td>
			<td><font style="FONT-SIZE: 12pt"><strong>Study Break</strong></font></td>
			<td>
			<p align="left"><br />
			</p>
			</td>
		</tr>
		<tr align="center" valign="top">
			<td><font style="FONT-SIZE: 12pt">45</font></td>
			<td>
			<p align="left"><font style="FONT-SIZE: 12pt">Monday 2&nbsp;November</font></p>
			</td>
			<td>
			<p align="center"><font size="-1"><font size="-1"><strong style="FONT-SIZE: 12pt">Exams</strong></font></font></p>
			</td>
			<td><br />
			</td>
		</tr>
		<tr align="center" valign="top">
			<td><font style="FONT-SIZE: 12pt">46</font></td>
			<td>
			<p align="left"><font style="FONT-SIZE: 12pt">Monday 9&nbsp;November</font></p>
			</td>
			<td>
			<p align="center"><font size="-1"><font size="-1"><strong style="FONT-SIZE: 12pt">Exams</strong></font></font></p>
			</td>
			<td><br />
			</td>
		</tr>
		<tr align="center" valign="top">
			<td><font style="FONT-SIZE: 12pt">47</font></td>
			<td>
			<p align="left"><font style="FONT-SIZE: 12pt">Monday&nbsp;16&nbsp;November</font></p>
			</td>
			<td>
			<p align="center"><br />
			</p>
			</td>
			<td><br />
			</td>
		</tr>
		<tr align="center" valign="top">
			<td><font style="FONT-SIZE: 12pt">48</font></td>
			<td>
			<p align="left"><font style="FONT-SIZE: 12pt">Monday 23&nbsp;November</font></p>
			</td>
			<td><font style="FONT-SIZE: 12pt">&nbsp;</font></td>
			<td><font style="FONT-SIZE: 12pt">&nbsp;</font></td>
		</tr>
		<tr align="center" valign="top">
			<td><font style="FONT-SIZE: 12pt">49</font></td>
			<td>
			<p align="left"><font style="FONT-SIZE: 12pt">Monday&nbsp;30 November</font></p>
			</td>
			<td><font style="FONT-SIZE: 12pt">&nbsp;</font></td>
			<td><font style="FONT-SIZE: 12pt">&nbsp;</font></td>
		</tr>
		<tr align="center" valign="top">
			<td><font style="FONT-SIZE: 12pt">50</font></td>
			<td>
			<p align="left"><font style="FONT-SIZE: 12pt">Monday 7&nbsp;December</font></p>
			</td>
			<td><font style="FONT-SIZE: 12pt">&nbsp;</font></td>
			<td>
			<p align="left"><font style="FONT-SIZE: 12pt">&nbsp;</font></p>
			</td>
		</tr>
		<tr align="center" valign="top">
			<td><font style="FONT-SIZE: 12pt">51</font></td>
			<td>
			<p align="left"><font style="FONT-SIZE: 12pt">Monday&nbsp;14&nbsp;December</font></p>
			</td>
			<td><font style="FONT-SIZE: 12pt">&nbsp;</font></td>
			<td>
			<p align="left"><br />
			</p>
			</td>
		</tr>
		<tr align="center" valign="top">
			<td><font style="FONT-SIZE: 12pt">52 &amp; 53</font></td>
			<td>
			<p align="left"><font style="FONT-SIZE: 12pt">Monday 21/28&nbsp;December</font></p>
			</td>
			<td><font style="FONT-SIZE: 12pt">&nbsp;</font></td>
			<td style="text-align: left;"><font style="FONT-SIZE: 12pt">&nbsp;</font></td>
		</tr>
	</tbody>
</table>
    </div>
        <div id="rn_FileAttach">
        <!-- UC-133 Name changed in 3.8 -->
        <div id="rn_FileListDisplay_6" class="rn_FileListDisplay rn_Output">
                        <span class="rn_DataLabel">Attachments</span>
                <div class="rn_DataValue">
            <ul>
                            <li>
                                        <a href="/ci/fattach/get/1270579/0/session/L2F2LzEvdGltZS8xNjA1MDExODI4L2dlbi8xNjA1MDExODI4L3NpZC9mVWhDQ1NYSU9HTDlpRnR2aDRLanhZZ1U5bWlzeU8yVGlqa3RKa2xiNFhyUDdfOW01X3NOSm9najByX1h0cE1ES05aWTlPRkVYZ19za0tuRVBYbTZoNEI4TDllTzEzSEQ0UXMlN0VZQm92RndGNSU3RVpJY19fR2pISmdnJTIxJTIx/filename/Calendar+2020.docx" target="_self">
                                                    <span class='rn_FileTypeIcon rn_docx'><span class='rn_ScreenReaderOnly'>File Type docx</span></span>                                                Calendar 2020.docx                    </a>
                                       <span class="rn_FileSize">(21.85 KB)</span>
                                   </li>
                        </ul>
       </div>
    </div>
    </div>
        <div id="rn_AnswerFeedback_7" class="rn_AnswerFeedback">
    <div id="rn_AnswerFeedback_7_AnswerFeedbackControl" class="rn_AnswerFeedbackControl">
                    <h2 class="rn_Title">Was this answer helpful?</h2>
                            <div id="rn_AnswerFeedback_7_RatingButtons" class="rn_RatingButtons">
    <button id="rn_AnswerFeedback_7_RatingYesButton" type="button">Yes</button>
    <button id="rn_AnswerFeedback_7_RatingNoButton" type="button">No</button>
</div>
            </div>
</div>
    	
	
</div>
<div id="rn_SideBar" role="navigation" style="margin-top:30px">
    <div class="sidebox boxshadow">
        <h2 class="rn_Title">Need More Info?</h2>
        <p><br/><a href="/app/ask" class="sidebarbtn" style="color:#FFF"> 
	        <span class="ion-email" style="font-size:1.6em;vertical-align:middle;padding-right:5px"></span> 
	        Email Us</a></p>
        <br/>     </div>
    <div class="sidebox boxshadow" style="background:#eee">
    <div id="rn_RelatedAnswers_8" class="rn_RelatedAnswers">
                <h2>Related Answers</h2>
        <ul>
                <li>
            <a href="/app/answers/detail/a_id/1241/related/1/session/L2F2LzEvdGltZS8xNjA1MDExODI4L2dlbi8xNjA1MDExODI4L3NpZC9mVWhDQ1NYSU9HTDlpRnR2aDRLanhZZ1U5bWlzeU8yVGlqa3RKa2xiNFhyUDdfOW01X3NOSm9najByX1h0cE1ES05aWTlPRkVYZ19za0tuRVBYbTZoNEI4TDllTzEzSEQ0UXMlN0VZQm92RndGNSU3RVpJY19fR2pISmdnJTIxJTIx" target="_self">
                2021 undergraduate dates and teaching weeks            </a>
        </li>
                <li>
            <a href="/app/answers/detail/a_id/353/related/1/session/L2F2LzEvdGltZS8xNjA1MDExODI4L2dlbi8xNjA1MDExODI4L3NpZC9mVWhDQ1NYSU9HTDlpRnR2aDRLanhZZ1U5bWlzeU8yVGlqa3RKa2xiNFhyUDdfOW01X3NOSm9najByX1h0cE1ES05aWTlPRkVYZ19za0tuRVBYbTZoNEI4TDllTzEzSEQ0UXMlN0VZQm92RndGNSU3RVpJY19fR2pISmdnJTIxJTIx" target="_self">
                Holidays and other important date information            </a>
        </li>
                <li>
            <a href="/app/answers/detail/a_id/76/related/1/session/L2F2LzEvdGltZS8xNjA1MDExODI4L2dlbi8xNjA1MDExODI4L3NpZC9mVWhDQ1NYSU9HTDlpRnR2aDRLanhZZ1U5bWlzeU8yVGlqa3RKa2xiNFhyUDdfOW01X3NOSm9najByX1h0cE1ES05aWTlPRkVYZ19za0tuRVBYbTZoNEI4TDllTzEzSEQ0UXMlN0VZQm92RndGNSU3RVpJY19fR2pISmdnJTIxJTIx" target="_self">
                Exam timetable release dates            </a>
        </li>
                <li>
            <a href="/app/answers/detail/a_id/75/related/1/session/L2F2LzEvdGltZS8xNjA1MDExODI4L2dlbi8xNjA1MDExODI4L3NpZC9mVWhDQ1NYSU9HTDlpRnR2aDRLanhZZ1U5bWlzeU8yVGlqa3RKa2xiNFhyUDdfOW01X3NOSm9najByX1h0cE1ES05aWTlPRkVYZ19za0tuRVBYbTZoNEI4TDllTzEzSEQ0UXMlN0VZQm92RndGNSU3RVpJY19fR2pISmdnJTIxJTIx" target="_self">
                Exam start times            </a>
        </li>
                <li>
            <a href="/app/answers/detail/a_id/2969/related/1/session/L2F2LzEvdGltZS8xNjA1MDExODI4L2dlbi8xNjA1MDExODI4L3NpZC9mVWhDQ1NYSU9HTDlpRnR2aDRLanhZZ1U5bWlzeU8yVGlqa3RKa2xiNFhyUDdfOW01X3NOSm9najByX1h0cE1ES05aWTlPRkVYZ19za0tuRVBYbTZoNEI4TDllTzEzSEQ0UXMlN0VZQm92RndGNSU3RVpJY19fR2pISmdnJTIxJTIx" target="_self">
                Last date to add a unit for Summer School            </a>
        </li>
        </ul>
</div>
    </div>
    <!-- UC-133 Deprecated in the upgrade to 3.8
    <div class="sidebox" style="background:#fff">
    <rn:widget path="knowledgebase/PreviousAnswers2" label_title="Viewed Answers" />
    </div>
    -->
    </div>	
        </div>
    </div>
    <!--<div id="rn_Footer" role="contentinfo">
    </div>-->
</div>
<div id="footercontainer"> 
        <!--[if IE 6]><div class="ie6expander"><div class="ie6sizer"><![endif]-->
        <div class="internal" style="margin:0 auto;max-width:1025px;">
<!--begin-footer-firstcol-->
            <div id="footerfirstcol" class="column">
                <div class="shifter"><h1>The&nbsp;University&nbsp;of Western&nbsp;Australia</h1></div>
                <ul class="discretelinks">
                  <li><a href="//uwa.edu.au/">University Homepage</a></li>
                  <li><a href="//studyat.uwa.edu.au/">Future Students</a></li>
                  <li><a href="//uwa.edu.au/current">Current Students</a></li>
                  <li><a href="//uwa.edu.au/staff">Staff</a></li>
                  <li><a href="//uwa.edu.au/business">Business and Industry</a></li>
                  <li><a href="//uwa.edu.au/alumni">Alumni and Friends</a></li>
                  <li><a href="//uwa.edu.au/media">Media</a></li>
                </ul>
            </div><!--end .column-->
<!--end-footer-firstcol-->
<!--begin-footer-universityinfo-->
            <div class="column">
                <h2>University information</h2>
                <p><acronym title="Commonwealth Register of Institutions and Courses for Overseas Students">CRICOS Code: 00126G </acronym></p>
                <ul class="discretelinks">
                    <li><a href="//uwa.edu.au/accessibility">Accessibility</a></li>
                    <li><a href="//uwa.edu.au/campus_map">Campus map</a></li>
                    <li><a href="//uwa.edu.au/contact">Contact the University</a></li>
                    <li><a href="//uwa.edu.au/indigenous_commitment">Indigenous Commitment</a></li>
                    <li><a href="//uwa.edu.au/terms_of_use">Terms of use</a></li>
                </ul>
            </div><!--end .column-->
<!--end-footer-universityinfo-->
            <!-- This column may be excluded if it is innapropriate -->
            <!--
            <div id="page_info">
                <img id="info_arrow" width="16" height="15" alt="" src="//static.weboffice.uwa.edu.au/visualid/graphics/footer-infoarrow.gif" />
                <h2>This Page</h2>
                <p>[page information]</p>
            </div>
            -->
        </div><!--end .internal-->
        <!--[if IE 6]></div></div><![endif]--><!--end .ie6expander, .ie6sizer-->
    </div>    
    <script type="text/javascript">
	//<![CDATA[
	  var trackerId = 'UA-7892507-20';
	//]]>
	</script>
	<script type="text/javascript" src="//static.weboffice.uwa.edu.au/visualid/scripts/id-analytics-universal.js"></script>
    <!-- Google Tag Manager -->
	<noscript><iframe src="//www.googletagmanager.com/ns.html?id=GTM-W6NNMJ"
	height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
	<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
	new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
	j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
	'//www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
	})(window,document,'script','dataLayer','GTM-W6NNMJ');</script>
	<!-- End Google Tag Manager -->
<script>var YUI_config={"fetchCSS":false,"modules":{"RightNowTreeView":"/euf/core/3.8/js/0.332/min/modules/ui/treeview.js","RightNowTreeViewDialog":"/euf/core/3.8/js/0.332/min/modules/ui/treeviewdialog.js","RightNowTreeViewDropdown":"/euf/core/3.8/js/0.332/min/modules/ui/treeviewdropdown.js"},"lang":["en-AU","en-US"],"injected":true,"comboBase":"//ipoint.widget.custhelp.com/ci/cache/yuiCombo/","groups":{"gallery-treeview":{"base":"/rnt/rnw/yui_3.18/gallery-treeview/","modules":{"gallery-treeview":{"path":"gallery-treeview-min.js"}}}}};</script>
<script type="text/javascript" src="/euf/core/3.8/js/0.332/min/RightNow.js"></script>
<script type="text/javascript" src="/euf/generated/optimized/1603846217/templates/standard.1a3f270a5da53ada382f9e9a791de08b.js"></script>
<script type="text/javascript" src="/euf/generated/optimized/1603846217/pages/answers/detail.ccce2e1d272c781e28875b54f13d62c2.js"></script>
<script>
/* <![CDATA[ */
RightNow.Env=(function(){var _props={module:'standard',coreAssets:'/euf/core/3.8/',yuiCore:'/rnt/rnw/yui_3.18/',profileData:{"isLoggedIn":false,"previouslySeenEmail":null}};return function(prop){return _props[prop];};})();RightNow.Interface.setMessagebase(function(){return {"ATTRIBUTES_LC_LBL":"attributes","ATTRIBUTE_HAVENT_SPECIFIED_VALID_IT_LBL":"Value for '%s' attribute is a number and you haven't specified a valid value for it.","BACK_LBL":"Back","BEG_DIALOG_PLS_DISMISS_DIALOG_BEF_MSG":"Beginning of dialogue. Please dismiss dialogue before continuing","CHANGED_LBL":"Changed","CLOSE_CMD":"Close","COL_SAVE_ED_ERR_L_INV_E_PERMISSIONS_MSG":"Widget changes could not be saved due to errors while saving. Please check the file permissions.","DIALOG_LBL":"dialogue","DIALOG_PLEASE_READ_TEXT_DIALOG_MSG_MSG":"Dialogue. Please read text above for dialogue message","END_DIALOG_PLS_DISMISS_DIALOG_BEF_MSG":"End of dialogue. Please dismiss dialogue before continuing","ERROR_LBL":"Error","ERRORS_LBL":"Errors","ERROR_PCT_S_LBL":"Error: %s","ERROR_REQUEST_ACTION_COMPLETED_MSG":"There was an error with the request and the action could not be completed.","ERR_SUBMITTING_FORM_DUE_INV_INPUT_LBL":"There was an error submitting the form, due to invalid input","ERR_SUBMITTING_SEARCH_MSG":"There was a problem with your request. Please change your search terms and try again.","HELP_LBL":"Help","INFORMATION_LBL":"Information","INFORMATION_S_LBL":"Information: %s","OK_LBL":"OK","PCT_S_ATTRIB_REQD_HAVENT_VALUE_MSG":"The '%s' attribute is required and you haven't specified a value for it.","PG_COL_SAVE_ED_ERR_L_INV_E_PERMISSIONS_MSG":"Widget changes of page could not be saved due to errors while saving. Please check the page file permissions.","REVEALED_DISP_TB_DD_OP_ADDTL_T_EXPOSED_MSG":"Note: The widget, when revealed, can be inspected, but you may need to perform additional actions for it to be exposed.","SOME_INST_ID_BUT_SEE_ITS_SATTRIBUTESS_MSG":"Some or all instances of this widget are hidden, but you can see its %sattributes%s.","SUCCESS_S_LBL":"Success: %s","TEMPL_COL_SAVE_ED_ERR_INV_TEMPL_PRMSSNS_MSG":"Widget changes of template could not be saved due to errors while saving. Please check the template file permissions.","THIS_WIDGET_HAS_NO_ATTRIBUTES_MSG":"This widget has no attributes.","THIS_WIDGET_HAS_NO_VIEW_LBL":"This widget has no view","VAL_PCT_S_ATTRIB_MINIMUM_VAL_ACCD_MSG":"Value for '%s' attribute is too small. The minimum value accepted is %s, but the value received was %s.","VAL_PCT_S_ATTRIB_MAX_VAL_ACCD_PCT_S_MSG":"Value for '%s' attribute is too large. The maximum value accepted is %s, but the value received was %s.","VIEW_ATTRIBUTES_LBL":"View Attributes","WARNING_LBL":"Warning","WARNING_S_LBL":"Warning: %s","WIDGET_CHANGES_ERRORS_WILL_IGNORED_MSG":"Widget changes with errors will be ignored.","RESPONSE_PLACEHOLDER_LBL":"<Response Placeholder>","NO_ANSWERS_FOUND_MSG":"No Answers found.","AGT_TEXT_LBL":"Agent text:","ADD_TO_CHAT_CMD":"Add to Chat","NEW_CONTENT_ADDED_BELOW_MSG":"New content added below.","TOP_CONTENT_CONTENT_ADDED_MSG":"Top of new content. New content has been added below.","PCT_S_IS_REQUIRED_MSG":"%s is required","FIELD_IS_NOT_A_VALID_EMAIL_ADDRESS_MSG":"field is not a valid email address.","PLEASE_LOG_CREATE_AN_ACCOUNT_CONTINUE_LBL":"Please log in or create an account to continue","PCT_S_CONTAIN_THAN_MSG":"%s must not contain either '<' or '>'","PCT_S_MUST_NOT_CONTAIN_QUOTES_MSG":"%s must not contain quotes","PCT_S_MUST_NOT_CONTAIN_MSG":"%s must not contain '&'","PLEASE_ENTER_SINGLE_EMAIL_ADDRESS_MSG":"Please enter a single email address.","PCT_S_IS_INVALID_MSG":"%s is invalid","PCT_S_IS_TOO_LONG_MSG":"%s is too long","THERE_PROB_REQ_ACTION_COULD_COMPLETED_MSG":"There was a problem with the request and the action could not be completed.","THUMBNAIL_FOR_ATTACHED_IMAGE_MSG":"Thumbnail for attached image.","REQUIRED_LBL":"Required","FIELD_REQUIRED_MARK_LBL":"*","FORMSUBMIT_PLACED_FORM_UNIQUE_ID_MSG":"FormSubmit must be placed within a form with a unique ID.","PLS_VERIFY_REQ_ENTERING_TEXT_IMG_MSG":"Please verify your request by entering the text in the image.","VALUE_MUST_BE_AN_INTEGER_MSG":"value must be an integer","VALUE_IS_TOO_LARGE_MAX_VALUE_MSG":"value is too large (max value: ","VALUE_IS_TOO_SMALL_MIN_VALUE_MSG":"value is too small (min value: ","CONTAIN_1_CHARACTER_MSG":"must contain at least 1 more character","PCT_D_CHARACTERS_MSG":"must be at least %d characters long","EXCEEDS_SZ_LIMIT_PCT_D_CHARS_1_LBL":"exceeds its size limit of %d characters by 1 character","S_SZ_CHARS_CHARS_CHARS_XP_SBM_SZ_XCDD_MSG":"exceeds its size limit of %d characters by %d characters. Note that some characters (such as '&' and '<') are expanded upon submission which may cause the size limit to be exceeded.","PCT_S_IS_AN_INVALID_POSTAL_CODE_MSG":"%s is an invalid postal code","PCT_S_IS_AN_INVALID_PHONE_NUMBER_MSG":"%s is an invalid phone number","PCT_S_CONT_SPACES_DOUBLE_QUOTES_LBL":"%s cannot contain spaces, double quotes or <>","PCT_S_DIDNT_MATCH_EXPECTED_INPUT_LBL":"%s didn't match expected input","CONTAIN_SPACES_PLEASE_TRY_MSG":"must not contain quotes. Please try again.","IS_NOT_A_VALID_URL_MSG":"is not a valid URL","PCT_S_MUST_NOT_CONTAIN_SPACES_MSG":"%s must not contain spaces.","USERNAME_LBL":"Username","PCT_S_CONTAIN_DOUBLE_QUOTES_MSG":"%s must not contain double quotes.","PCT_S_CNT_THAN_MSG":"%s must not contain either '<' or '>'","DISPLAY_NAME_LBL":"Display Name","LOGIN_LBL":"Login","CANCEL_LBL":"Cancel","OOPS_LBL":"Oops!","COOKIES_ENABLED_BROWSER_ORDER_LOG_MSG":"You must have cookies enabled in your browser in order to log in. Please enable cookies and try again.","ERROR_PAGE_PLEASE_S_TRY_MSG":"There is an error on the page. Please correct the problem(s) and try again.","PCT_S_IS_NOT_COMPLETELY_FILLED_IN_MSG":"%s is not completely filled in","PCT_S_IS_NOT_A_VALID_DATE_MSG":"%s is not a valid date","VALUE_MIN_VALUE_PCT_S_MSG":"value is too small (min value: %s)","PCT_S_REQUIREMENTS_MET_LBL":"%s requirements have not been met","PASSWD_VALIDATION_REQS_READ_L_MSG":"For password validation requirements, read the list below.","PASSWORD_IS_TOO_SHORT_MSG":"Password is too short","PERFECT_LBL":"Perfect","PASSWORD_IS_TOO_INSECURE_MSG":"Password is too insecure","COMPLETE_LBL":"Complete","INCOMPLETE_LBL":"Incomplete","EXPECTED_INPUT_LBL":"Expected Input","WAITING_FOR_CHARACTER_LBL":"Waiting for character: ' ","PLEASE_TYPE_A_NUMBER_MSG":"Please type a number","PLEASE_ENTER_UPPERCASE_LETTER_MSG":"Please enter an upper case letter or a number","PLEASE_ENTER_AN_UPPERCASE_LETTER_MSG":"Please enter an upper case letter","PLS_ENTER_UPPERCASE_LETTER_SPECIAL_MSG":"Please enter an upper case letter, a number or a special character","PLEASE_ENTER_LOWERCASE_LETTER_MSG":"Please enter a lower case letter or a number","PLEASE_ENTER_A_LOWERCASE_LETTER_MSG":"Please enter a lower case letter","PLS_ENTER_LOWERCASE_LETTER_SPECIAL_MSG":"Please enter a lower case letter, a number or a special character","PLEASE_ENTER_A_LETTER_OR_A_NUMBER_MSG":"Please enter a letter or a number","PLEASE_ENTER_A_LETTER_MSG":"Please enter a letter","PLEASE_ENTER_LETTER_SPECIAL_CHAR_MSG":"Please enter a letter, a number or a special character","THE_INPUT_IS_TOO_LONG_MSG":"The input is too long","THE_INPUT_IS_TOO_SHORT_MSG":"The input is too short","CHARACTER_LBL":"Character"};});
RightNow.Interface.setConfigbase(function(){return {"DE_VALID_EMAIL_PATTERN":"^((([-_!#$%&'*+\/=?^~\`{|}\\w]+(\\.[.]?[-_!#$%&'*+\/=?^~\`{|}\\w]+)*)|(\"[^\"]+\"))@[0-9A-Za-z]+([\\-]+[0-9A-Za-z]+)*(\\.[0-9A-Za-z]+([\\-]+[0-9A-Za-z]+)*)+[; ]*)$","CP_HOME_URL":"answers\/list","CP_FILE_UPLOAD_MAX_TIME":300,"OE_WEB_SERVER":"ipoint.uwa.edu.au","SUBMIT_TOKEN_EXP":30,"ANS_NOTIF_ENABLED":true};});
RightNow.Url.setParameterSegment(5);
RightNow.Url.setSession('L2F2LzEvdGltZS8xNjA1MDExODI4L2dlbi8xNjA1MDExODI4L3NpZC9mVWhDQ1NYSU9HTDlpRnR2aDRLanhZZ1U5bWlzeU8yVGlqa3RKa2xiNFhyUDdfOW01X3NOSm9najByX1h0cE1ES05aWTlPRkVYZ19za0tuRVBYbTZoNEI4TDllTzEzSEQ0UXMlN0VZQm92RndGNSU3RVpJY19fR2pISmdnJTIxJTIx');
RightNow.Event.setNoSessionCookies(true);
RightNow.Interface.Constants = 
{"API_VALIDATION_REGEX_EMAIL":"((([-_!#$%&'*+\/=?^~\`{|}\\w]+([.][-_!#$%&'*+\/=?^~\`{|}\\w]*)*)|(\"[^\"]+\"))@[0-9A-Za-z]+([\\-]+[0-9A-Za-z]+)*(\\.[0-9A-Za-z]+([\\-]+[0-9A-Za-z]+)*)+[;, ]*)+"};
YUI().use('event-base',function(Y){Y.on('domready',function(){var n=RightNow.namespace,W=RightNow.Widgets,c='createWidgetInstance';
n('RightNow.Widgets.FileListDisplay').templates={"refreshedFileList":"<div id=\"rn_<%= instanceID %>\" class=\"rn_FileListDisplay rn_Output\">  <% if (attrs.label) { %>  <span class=\"rn_DataLabel\"><%= attrs.label %><\/span>  <% } %> <div class=\"rn_DataValue\">  <ul> <% for(var i=0; i < fileAttachments.length; i++) { %>  <li id=\"<%='rn_File_' + fileAttachments[i].ID %>\">  <a href=\"<%= fileAttachments[i].AttachmentUrl %>\" rel=\"nofollow\" target=\"_blank\"> <% if (attrs.display_thumbnail && fileAttachments[i].ThumbnailScreenReaderText) { %>  <img class='rn_FileTypeImageThumbnail' alt=\"<%= thumbnailAltText %>\"\/> <span class=\"rn_ScreenReaderOnly\"><%= fileAttachments[i].ThumbnailScreenReaderText %><\/span>  <% } %>  <%= fileAttachments[i].FileName %>  <\/a> <% if(attrs.display_file_size) { %>  <span class=\"rn_FileSize\">(<%= fileAttachments[i].FileSize %>)<\/span>  <% } %>  <\/li>  <% } %> <\/ul>  <\/div> <\/div>"};
n('RightNow.Widgets.AnswerFeedback').templates={"feedbackForm":"<div id=\"<%= domPrefix %>_AnswerFeedbackForm\" class=\"rn_AnswerFeedbackForm\"> <div id=\"<%= domPrefix %>_DialogDescription\" class=\"rn_DialogSubtitle\"><%= labelDialogDescription %><\/div> <div id=\"<%= domPrefix %>_ErrorMessage\"><\/div>  <form>  <% if (!isProfile) { %>  <label for=\"<%= domPrefix %>_EmailInput\"><%= labelEmailAddress %> <%= getRequiredLabel() %> <\/label> <input id=\"<%= domPrefix %>_EmailInput\" class=\"rn_EmailField\" type=\"text\" value=\"<%= userEmail %>\"\/>  <% } %>  <label for=\"<%= domPrefix %>_FeedbackTextarea\"><%= labelCommentBox %> <%= getRequiredLabel() %> <\/label> <textarea id=\"<%= domPrefix %>_FeedbackTextarea\" class=\"rn_Textarea\" rows=\"4\" cols=\"60\"><\/textarea>   <\/form> <\/div>"};
W.setInitialWidgetCount(5);
W[c]({"i":{"c":"NavigationTab","n":"NavigationTab","w":1},"a":{"label_tab":"FAQs","link":"\/app\/answers\/list\/session\/L2F2LzEvdGltZS8xNjA1MDExODI4L2dlbi8xNjA1MDExODI4L3NpZC9mVWhDQ1NYSU9HTDlpRnR2aDRLanhZZ1U5bWlzeU8yVGlqa3RKa2xiNFhyUDdfOW01X3NOSm9najByX1h0cE1ES05aWTlPRkVYZ19za0tuRVBYbTZoNEI4TDllTzEzSEQ0UXMlN0VZQm92RndGNSU3RVpJY19fR2pISmdnJTIxJTIx","pages":["answers\/list","answers\/detail","answers\/intent"],"subpages":"","css_class":"rn_SelectedTab","target":"_self","external":false,"searches_done":null,"label_selected_tab":"%s selected"},"j":[]},'W10=','fUAc66BcwVtaWifWF9gCYygzy80yXCW8vgeW2ZHwhPlYyJUs2oywLXUvLeHkuSwBNLpfnM0lPe3aXQPtrYVdZkENLUDebPFXwFPR6izDbeZr0FW~L4HJ8bUKx4RCnS4_aSFGVUTGDUb0U!',1605011828,'NavigationTab_1','standard/navigation/NavigationTab','RightNow.Widgets.NavigationTab','1','ZlVydWRVdmZIQXlHSlZmWVhzV3FpU3VaWjRpNzRWWWVJcVR2SUN4MHZIanNZTGM2eTBpeDhYQXBXQW11ZmZqcGxXXzZpblFMdXVkMWM5bkhhTGd0MTFFNFB1dGkzS3lUSzg0MHNIZTZqVmkxbWNNR0dabHRzRll6bmhUdmh_NVFVbFNtNTRWNjVGaDRjIQ!!');
W[c]({"i":{"c":"NavigationTab","n":"NavigationTab","w":2},"a":{"label_tab":"Email Us","link":"\/app\/ask\/session\/L2F2LzEvdGltZS8xNjA1MDExODI4L2dlbi8xNjA1MDExODI4L3NpZC9mVWhDQ1NYSU9HTDlpRnR2aDRLanhZZ1U5bWlzeU8yVGlqa3RKa2xiNFhyUDdfOW01X3NOSm9najByX1h0cE1ES05aWTlPRkVYZ19za0tuRVBYbTZoNEI4TDllTzEzSEQ0UXMlN0VZQm92RndGNSU3RVpJY19fR2pISmdnJTIxJTIx","pages":["ask","ask_confirm"],"subpages":"","css_class":"rn_SelectedTab","target":"_self","external":false,"searches_done":null,"label_selected_tab":"%s selected"},"j":[]},'W10=','fUOGlLIYnBFSKSICHaKY1xJ0CtIpTzKpco89UfL6uHA4Mu9K7fot0eHTrkt7S38UzAMFsNGXYoX7oYNe4mUZifq7HvljfmK1Dj2IOhodaTwdYu0DYyvUTaTRoQXkiYpYnmVXw5qZCSITk!',1605011828,'NavigationTab_2','standard/navigation/NavigationTab','RightNow.Widgets.NavigationTab','2','ZlVPMn5mdGpMbGxMMW5qeDZUNU05dkI5Tn43aFl4OHplTHZiRFhSRVphWG9KfnNqWm43R1NxZ3l0NzRMYms3OWhpMkVTc0t4eHgzelBPU24wNHZFSFJaQU5IMVhNcFhLSWNGcFR1NFhEUUJSQjdoVWF0QjlUdVA4d19JbUxyMnB0ZHJVSWJrWUlGaVJBIQ!!');
W[c]({"i":{"c":"NavigationTab","n":"NavigationTab","w":3},"a":{"label_tab":"Your Account","link":"\/app\/account\/overview\/session\/L2F2LzEvdGltZS8xNjA1MDExODI4L2dlbi8xNjA1MDExODI4L3NpZC9mVWhDQ1NYSU9HTDlpRnR2aDRLanhZZ1U5bWlzeU8yVGlqa3RKa2xiNFhyUDdfOW01X3NOSm9najByX1h0cE1ES05aWTlPRkVYZ19za0tuRVBYbTZoNEI4TDllTzEzSEQ0UXMlN0VZQm92RndGNSU3RVpJY19fR2pISmdnJTIxJTIx","pages":["utils\/account_assistance","account\/overview","account\/profile","account\/notif","account\/change_password","account\/questions\/list","account\/questions\/detail","account\/notif\/list","utils\/login_form","utils\/create_account","utils\/submit\/password_changed","utils\/submit\/profile_updated"],"subpages":"Account Overview > \/app\/account\/overview, Support History > \/app\/account\/questions\/list, Account Settings > \/app\/account\/profile","css_class":"rn_SelectedTab","target":"_self","external":false,"searches_done":null,"label_selected_tab":"%s selected"},"j":[]},'W10=','fUvV~yZyYfvleARGpTJl8JPa8EW71Zz_JQ~Iqdf~Tq8B2_Cbyou7DnPPviUIrZiCRcMuP~xmPSiUbFj875RBgE1xrR4gE7EzmvvPCmr6nPDnX_j5O6~PUa0~dcnG417N2VwoFzSHLq9eU!',1605011828,'NavigationTab_3','standard/navigation/NavigationTab','RightNow.Widgets.NavigationTab','3','ZlUzOVcwc0tmTUN1R19FdFZpa2kyTDZhVTB2VE1sV0NpMVRzSF9TZUNoMlFLU1p3XzdJS2FDMThiR0tUWUlfVTNuWm9jQUJQamVqX1VDQ25OMWV1b2F3T3d6T2M1SVBfNG5NRWx6MXdsNGZOTWlWdVl1N21HRDBqen5wRW1tdVhIOVM1cUpMa3djR1dJIQ!!');
W[c]({"i":{"c":"FileListDisplay","n":"FileListDisplay","w":6},"a":{"display_thumbnail":true,"label":"Attachments","left_justify":false,"name":"Answer.FileAttachments","display_file_size":true,"sort_by_filename":false,"parent_object_id":null,"sub_id":"file"},"j":{"attachments":[{"ContentType":"application\/vnd.openxmlformats-officedocument.wordprocessingml.document","CreatedTime":null,"FileName":"Calendar 2020.docx","ID":1270579,"Size":22377,"UpdatedTime":null,"URL":null,"Description":null,"Name":null,"Disabled":null,"Indexed":null,"Private":false,"Target":"_self","Icon":"<span class='rn_FileTypeIcon rn_docx'><span class='rn_ScreenReaderOnly'>File Type docx<\/span><\/span>","ReadableSize":"21.85 KB","AttachmentUrl":"\/ci\/fattach\/get\/1270579\/0\/session\/L2F2LzEvdGltZS8xNjA1MDExODI4L2dlbi8xNjA1MDExODI4L3NpZC9mVWhDQ1NYSU9HTDlpRnR2aDRLanhZZ1U5bWlzeU8yVGlqa3RKa2xiNFhyUDdfOW01X3NOSm9najByX1h0cE1ES05aWTlPRkVYZ19za0tuRVBYbTZoNEI4TDllTzEzSEQ0UXMlN0VZQm92RndGNSU3RVpJY19fR2pISmdnJTIxJTIx\/filename\/Calendar+2020.docx","ThumbnailScreenReaderText":null,"ThumbnailUrl":null}]}},'W10=','fUzWL_gxcG2fV1Fk8zM50fWK1kRcrUxfhlnlh4PbG~qqFXynmMfxAK22pHDbMRM6qhcn1Fxmj~cgR~aMrJ1nK~1J6qpRDBvZuWtwTrw~K~qE~cXI7kkbTegU1iiXloOwhVJvLQi52RT_c!',1605011828,'FileListDisplay_6','standard/output/FileListDisplay','RightNow.Widgets.FileListDisplay','6','ZlVmWX5tUm1SUVNydERvTkczVElhRjZkU18yaVZTbDZTaGtNcGpjdUU0d0ZVX2l2U2JhSGJFOXJBZTlncEp1V2JXS2xrbU52YzhTVXV2T3d5dDV5NmJUQzFoMXYwflZxSGNOUVJfd08weFdldlc4fmloTW91QUE0TUZBVHJmRFYzVFBzTlc2WFljZ1U0IQ!!');
W[c]({"i":{"c":"AnswerFeedback","n":"AnswerFeedback","w":7},"a":{"submit_rating_ajax":"\/ci\/ajaxRequest\/submitAnswerRating","submit_feedback_ajax":"\/ci\/ajaxRequest\/submitAnswerFeedback","label_title":"Was this answer helpful?","label_accessible_option_description":"Rate answer %d of %d","label_dialog_title":"Provide Additional Information","label_dialog_description":"Your rating has been submitted; please tell us how we can make this answer more useful.","options_count":2,"options_descending":false,"label_yes_button":"Yes","label_no_button":"No","feedback_page_url":"","dialog_threshold":1,"label_feedback_submitted":"Your feedback has been submitted.","label_feedback_thanks":"Thanks for your feedback.","label_email_address":"Email","label_comment_box":"Your Feedback","label_send_button":"Submit","label_cancel_button":"Cancel","use_rank_labels":false,"dialog_width":"375px"},"j":{"f_tok":"ZlVweWVBZlhPa2xVYU40X0d5NllBaHFjdl9meDNBX29QWGNpUkdJWTRpUDFpVTdhcERvN3lMWXNmNXJQSE96MktyemIwbDlRQ1ZNVXh2bTk5Ykl3N0kyMGdDZ2xic1lYNWNCMjhDcExEdTlTOWN2NmJjT2FHc0NyejNCX3VNaTFjRUViTDhHeURmcmRrIQ!!","isProfile":false,"email":"","buttonView":true,"answerID":"1405"}},'W10=','fUR9cZEWWT6R_gFWbMgeaN7WjJWVMBcg4BYPHlErha4BrLMKwFEiaFP5gTmtfh0oAriVW1wLWc3HcBlE1BXEDGc8IZuMi9Hpu8RXOUNDdqksFOQU9inBxMzaqAutyGFK01gRvHl7VJW~U!',1605011828,'AnswerFeedback_7','standard/feedback/AnswerFeedback','RightNow.Widgets.AnswerFeedback','7','ZlVUOUZnejdqWjV2VFBlR3ZweVRHTFhKa0lpYjJMQlRDV3hmNm5mYWNWVFc0T242VTIzYktTSG5zTko4TU1MMVAwTm1EVzVFbXJJQ04wY08yQmhQUnQxV2w3eUplWDd0cFlSeXh_TFNiZXM3Tm1HcXBFRUZWVGJyVUJQQTZCcn40MGtKRnJwQUh2eEFBIQ!!');
})});
/* ]]> */
</script>
<script type="text/javascript">
var _rnq=_rnq||[];_rnq.push({"s":"f37uaHXo","uh":"c43f5169","uc":"ipoint.uwa.edu.au\/app\/answers\/detail\/a_id\/1405","b":"ca27814","i":"ipoint:ipoint","f":"rnw","p":"Customer Portal","v":"20.8.0.1-b332","th":"www.rnengage.com"});
(function(e){var b,d,a=document.createElement("iframe"),c=document.getElementsByTagName("script");a.src="javascript:false";a.title="Action Capture";a.role="presentation";(a.frameElement||a).style.cssText="position:absolute;width:0;height:0;border:0";c=c[c.length-1];c.parentNode.insertBefore(a,c);try{b=a.contentWindow.document}catch(f){d=document.domain,a.src="javascript:var d=document.open();d.domain='"+d+"';void(0);",b=a.contentWindow.document}b.open()._l=function(){for(var a;e.length;)a=this.createElement("script"),
d&&(this.domain=d),a.src=e.pop(),this.body.appendChild(a)};b.write('<head><title>Action Capture</title></head><body onload="document._l();">');b.close()})(["https://www.rnengage.com/api/e/ca27814/e.js","//www.rnengage.com/api/1/javascript/acs.js"]);
</script></body>
</html>`;
