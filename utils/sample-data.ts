import { Agency, Agenda } from '@/lib/datocms';

/** Dummy agency data. */
export const sampleAgencyData: Agency[] = [
  {
    name: 'Broken Arrow Municipal Authority',
    id: '23298227',
    slug: 'bama',
  },
  {
    name: 'Edmond Public Works Committee',
    id: '23298229',
    slug: 'edmond',
  },
  {
    name: 'Oklahoma City Water Utilities Trust',
    id: '23298232',
    slug: 'ocwut',
  },
];

/** Dummy agenda data. */
export const sampleAgendaData: Agenda[] = [
  {
    date: '2022-09-13',
    id: '23800208',
    url: 'https://okc.primegov.com/Portal/Meeting?meetingTemplateId=49281',
    agency: {
      slug: 'ocwut',
    },
  },
  {
    date: '2022-09-06',
    id: '23798433',
    url: 'https://brokenarrow.legistar.com/MeetingDetail.aspx?ID=909662&GUID=F51CFDC3-4013-4131-9D0F-10847A5BB3D0&Options=&Search=',
    agency: {
      slug: 'bama',
    },
  },
  {
    date: '2022-09-20',
    id: '23798429',
    url: 'https://brokenarrow.legistar.com/MeetingDetail.aspx?ID=909665&GUID=166A0A4E-E847-4B8B-B45C-AD79A78B20AC&Options=&Search=',
    agency: {
      slug: 'bama',
    },
  },
  {
    date: '2022-09-14',
    id: '23798426',
    url: 'https://agenda.edmondok.com:8086/agenda_publish.cfm?id=&mt=ALL&get_month=9&get_year=2022&dsp=ag&seq=21059',
    agency: {
      slug: 'edmond',
    },
  },
  {
    date: '2022-09-28',
    id: '23798421',
    url: 'https://agenda.edmondok.com:8086/agenda_publish.cfm?id=&mt=ALL&get_month=9&get_year=2022&dsp=ag&seq=21060',
    agency: {
      slug: 'edmond',
    },
  },
  {
    date: '2022-09-27',
    id: '23298233',
    url: 'https://okc.primegov.com/Portal/Meeting?meetingTemplateId=49288',
    agency: {
      slug: 'ocwut',
    },
  },
];

export const agenda = String.raw`
<!DOCTYPE html>
<html lang="en" dir="ltr">
<head>
    <meta name="viewport" content="width=device-width" />
    <title>Meeting</title>
    <link href="/Content/portal/Content/Site.css?v1.2" rel="stylesheet" />
    <link href="/Content/portal/Content/bootstrap.min.css" rel="stylesheet" />
    <link href="/Content/portal/Content/fixedsticky.css" rel="stylesheet" />
    <script src="/Content/portal/Scripts/jquery-1.10.2.js"></script>
    <script src="/Content/portal/Scripts/bootstrap.min.js"></script>
    <script src="/Content/portal/Scripts/fixedsticky.js"></script>
    <link href="/Content/portal/Content/newvideo.css" rel="stylesheet" />
    <script async src="https://static.addtoany.com/menu/page.js"></script>
    <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
    <link rel="icon" type="image/png" href="/favicon.png" sizes="32x32">
    <style>
        .google-video-option {
            float: right;
            margin-right: 15px;
            margin-top: 10px;
        }

        .display-block {
            display: block;
        }

        .number-cell {
            padding-left: 6px !important;
        }

        .number-cell-section .attachment-icon-holder .section-attachment.attachment-cell.glyphicon.glyphicon-paperclip {
            padding-right: 10px;
        }

        .item-cell {
            padding-left: 0px;
        }

        .section-row td .attachment-icon-holder[style] {
            left: -24px !important;
            position: absolute;
        }

        .attachment-cell {
            width: 0.1px !important;
            max-width: 0.1px !important;
        }

        .attachment-icon-holder {
            top: 2.5px !important;
            left: -30px !important;
        }

        .section-row .number-cell-section {
            padding-left: 0;
            padding-right: 0;
            width: 10px !important;
            padding-right: 10px;
        }

        .section-item-attachments-insert {
            padding-left: 5px !important;
            margin-left: 0px;
        }

        .section-row td:first-of-type {
            padding: 0;
            padding-left: 5px;
        }

        .number-cell-section .attachment-icon-holder .section-attachment.attachment-cell.glyphicon.glyphicon-paperclip {
            padding-right: 0 !important;
        }

        .section-with-items {
            padding-left: 0px;
        }

        #meetingSection.post {
            padding: 1em 2em;
        }

        .item-cell.section-item-attachments-insert {
            padding-left: 0 !important;
        }

        .section-row .section-heading {
            padding-left: 10px;
        }
    </style>
</head>
<body>


    
    <div id="fb-root"></div>
    

    <!--Added videoSection Id so this is easier to reference from the javascript
    to remove the section from the page if no video exists-->
    <section role="main" class="video" id="videoSection">
        <div id="VideoArea" class="VideoArea" style="display: block;">
            <div class="vid-wrap">
                <div id="ytplayer" aria-label="Video Player" title="Video Player"></div>
                <button id="CloseVideoButton" onclick="closeVideo()" style="top: 40px;" class="btn btn-default pull-right">Close Video</button>
            </div>
        </div>
        <div class="VideoArea" style="display: block;">
            <button id='OpenVideoButton' onclick="openVideo()" style="top: 100px;" class="btn btn-default pull-right hidden">Open Video</button>
        </div>
    </section>

    <!--Added meetingSection Id so this is easier to reference from the javascript
    to move it to the top of the screen if no video exists-->
    <section id="meetingSection" class="post">
        <div id="MeetingContents" role="main"><html lang="en" dir="ltr"><head><title>Meeting</title><style>
    	
    .section-with-footer { margin-bottom: 2em; }
    .attachment-cell { width: 1px; vertical-align:top; white-space: nowrap; } 
    .attachment-icon-holder { width: 0px; position: relative; left: -24px; top: 3px; }
    .item-table { width: 100%; margin-left: 0em; }
    .number-cell { width: 122px; vertical-align: top; white-space: nowrap; padding-right: 30px; text-align: right; } 
    .number-cell-section { width:50px; vertical-align:top; white-space: nowrap; padding-left: 0px; padding-right:0px; }     
    .agenda-item p { word-wrap: break-word; width: 100%;}
	/* The rule on the next line selects all tables in the item column of a section an sets them to 100% width, as they tend to have widths set most often. */
    div[data-sectionid] td:last-child table { width: 100% !important; }
    /* The rule on the next line sets the section title text to 100% width, as it sometimes has a hard-coded width on it as well. */
    div[data-sectionid] td:last-child>table>tbody>tr>td { width: 100% !important; }
    /* The rule on the next line exchange the title's left margin for left padding, which should keep it from forcing the margin over. */
    div[data-sectionid] td:last-child>table>tbody>tr>td>div { margin-left: 0px !important; padding-left: 30px; }
	.widthAndRightAlign { display: block; width: 7rem; padding-right: 25px; text-align: right !important; }
	.motionText { text-transform: uppercase !important;; }
	.voteResult { text-transform: uppercase; margin-bottom: 10pt; }
	ol { padding-inline-start: 15px !important; font-family: Times New Roman !important;; font-size: 12pt !important; margin-top: -13px !important; }
	ol li:not(:last-child) { padding-bottom: 10pt; font-family: Times New Roman !important;; font-size: 12pt !important; }
	ol li { padding-left: 15pt; font-family: Times New Roman !important;; font-size: 12pt !important; }
	.paragraphSpacing { margin-bottom: 10pt; margin-left: 22px !important; }
	.alignLeft { padding-left: 75px; }
	p { margin-bottom: 10pt !important; }		
	.agenda-item>div>span.spanAsParagraph { text-transform: uppercase !important; display: inline !important; }
	.spanAsParagraph>u span { text-transform: uppercase !important; display: inline !important; }
	table[id^=sectionfooter_]>tbody>tr>td>div>span.spanAsParagraph { display: inline !important; }
	.section-row td:first-of-type { padding-left: 0px !important; }

@font-face { font-family: Philosopher ; src: url('https://okc.primegov.com/Content/css/customFonts/Philosopher.ttf'); } 
@font-face { font-family: Philosopher ; font-style: italic; src: url('https://okc.primegov.com/Content/css/customFonts/Philosopher-Italic.ttf'); } 
@font-face { font-family: Philosopher ; font-style: italic; font-weight:bold; src: url('https://okc.primegov.com/Content/css/customFonts/Philosopher-BoldItalic.ttf'); } 
@font-face { font-family: Philosopher ; font-weight:bold; src: url('https://okc.primegov.com/Content/css/customFonts/Philosopher-Bold.ttf'); } 
@font-face { font-family: Lucida Handwriting ; src: url('https://okc.primegov.com/Content/css/customFonts/Lucida-Handwriting.ttf'); } 
@font-face { font-family: Lucida Handwriting ; font-style: italic; src: url('https://okc.primegov.com/Content/css/customFonts/Lucida-Handwriting-Italic.ttf'); } 
@font-face { font-family: Helvetica Narrow ; src: url('https://okc.primegov.com/Content/css/customFonts/Helvetica-Narrow.ttf'); } 
@font-face { font-family: Lato ; src: url('https://okc.primegov.com/Content/css/customFonts/Lato.ttf'); } 

</style>
<link href='https://okc.primegov.com/Content/portal/Content/bootstrap.min.css' rel='stylesheet'></head><body><div><span style="font-size: medium;"><span new="" roman="" style="font-family: " times=""><span style="color: rgb(0, 0, 0);"><span style="font-style: normal;"><span style="font-variant-ligatures: normal;"><span style="font-variant-caps: normal;"><span style="font-weight: 400;"><span style="letter-spacing: normal;"><span style="orphans: 2;"><span style="text-transform: none;"><span style="white-space: normal;"><span style="widows: 2;"><span style="word-spacing: 0px;"><span style="text-decoration-style: initial;"><span style="text-decoration-color: initial;">&nbsp;</span></span></span></span></span></span></span></span></span></span></span></span></span></span></span><br>
<br>
&nbsp;</div>

<div style="text-align: center;"><span style="font-size: medium;"><span new="" roman="" style="font-family: " times=""><span style="color: rgb(0, 0, 0);"><span style="font-style: normal;"><span style="font-variant-ligatures: normal;"><span style="font-variant-caps: normal;"><span style="font-weight: 400;"><span style="letter-spacing: normal;"><span style="orphans: 2;"><span style="text-transform: none;"><span style="white-space: normal;"><span style="widows: 2;"><span style="word-spacing: 0px;"><span style="text-decoration-style: initial;"><span style="text-decoration-color: initial;"><span style="font-size: 22pt;"><img id="Picture 1" src="https://okc.primegov.com/content/images/org/background_9.png" style="width: 258px; height: 199px;"></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></div>

<div 003c71="" style="border-bottom: 1pt solid windowtext; padding: 0in 0in 1pt;">&nbsp;</div>

<div>&nbsp;</div>

<div style="text-align: center;"><span style="line-height:1;"><strong><span style="font-size:20pt;"><span style="font-family:Times New Roman,Times,serif;">A G E N D A</span></span></strong><br>
<br>
<span style="font-family:Times New Roman,Times,serif;"><span style="font-size:16pt;">October 25, 2022&nbsp;2:00 PM</span></span></span></div>

<div 003c71="" style="border-bottom: 1pt solid windowtext; padding: 0in 0in 1pt; text-align: justify;">&nbsp;</div>
&nbsp;

<div>
<table cellpadding="1" cellspacing="1" style="width:100%;">
	<tbody>
		<tr>
			<td style="width: 454px;">&nbsp;</td>
			<td style="width: 1423px;"><span style="line-height:1;"><span style="font-size:16pt;"><span style="font-family:Times New Roman,Times,serif;">Trustees:</span></span><br>
			<br>
			<span style="font-size:14pt;"><span style="font-family:&quot;Times New Roman&quot;,serif">James D. Couch</span><span style="font-family:Times New Roman,Times,serif;">, Chairman, Independent Trustee<br>
			Sharon Voorhees, Independent Trustee</span><br>
			<font face="Times New Roman, serif">Todd Stone</font><span style="font-family:Times New Roman,Times,serif;">, Council Trustee<br>
			David Holt, Mayor Trustee<br>
			&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Mark K. Stonecipher, Vice Chairman, Surrogate Trustee<br>
			Craig Freeman, City Manager Trustee<br>
			&nbsp; &nbsp; &nbsp; &nbsp; Laura A. Johnson, Surrogate Trustee<br>
			&nbsp;</span><br>
			<span style="font-family:Times New Roman,Times,serif;">Chris Browning, General Manager<br>
			Amy K. Simpson, Secretary</span></span></span></td>
		</tr>
	</tbody>
</table>
</div>

<div 003c71="" style="border-bottom: 1pt solid windowtext; padding: 0in 0in 1pt;">&nbsp;</div>

<div style="text-align: center;"><br>
<span style="line-height:1;"><span style="font-size:14pt;"><span style="font-family:Times New Roman,Times,serif;">City Council Chambers, Third Floor, 200 North Walker Avenue<br>
Oklahoma City, Oklahoma</span></span></span>&nbsp;

<h2 style="font-style:italic;"><span style="font-size:11pt"><span style="font-family:&quot;Times New Roman&quot;, serif"><i><span style="font-size:12.0pt">Residents can watch the meeting live by going to</span></i><i> </i><a href="https://youtube.com/cityofokc/live" style="color:blue; text-decoration:underline"><i><span style="font-size:12.0pt"><span style="letter-spacing:-.2pt">http://youtube.com/cityofokc/live</span></span></i></a><i><span style="font-size:12.0pt"><span style="color:#333333"><span style="letter-spacing:-.2pt">. </span></span></span></i><br>
<i><span style="font-size:12.0pt">Meetings can also be watched live on Cox Cable Channel 20.</span></i></span></span><br>
<span style="font-size:11pt"><span style="font-family:&quot;Times New Roman&quot;, serif"><i><span style="font-size:12.0pt">Meetings are replayed on Cox Cable Channel 20 the same evening.</span></i></span></span><br>
<span style="font-size:11pt"><span style="font-family:&quot;Times New Roman&quot;, serif"><i><span style="font-size:12.0pt">If there are technical difficulties with the live stream during the meeting, </span></i></span></span><br>
<span style="font-size:11pt"><span style="font-family:&quot;Times New Roman&quot;, serif"><i><span style="font-size:12.0pt">a video will be posted as soon as possible after the meeting. </span></i></span></span></h2>

<div 003c71="" style="border-bottom: 1pt solid windowtext; padding: 0in 0in 1pt;">&nbsp;</div>

<div><span style="font-size:12pt;"><span style="font-family:Times New Roman,Times,serif;">&nbsp;</span></span></div>
</div>

<div 003c71="" style="border-bottom: 1pt solid windowtext; padding: 0in 0in 1pt; text-align: justify; COLOR=">
<div style="text-align: center;">&nbsp;</div>

<div style="page-break-after: always"><span style="display: none;">&nbsp;</span></div>
</div>

<div style="text-align: center;"><br>
<span style="font-size:12pt;"><span style="font-family:Times New Roman,Times,serif;">OKLAHOMA CITY WATER UTILITIES TRUST<br>
MEETING INFORMATION</span></span></div>

<div 003c71="" style="border-bottom: 1pt solid windowtext; padding: 0in 0in 1pt; text-align: justify; COLOR=">&nbsp;</div>

<div>
<div style="text-align:justify"><br>
<span style="font-size:11pt"><span style="line-height:1"><span style="font-family:&quot;Times New Roman&quot;, Times, serif; text-align:justify">The Oklahoma City Water Utilities Trust usually meets twice per month on Tuesdays at 2:00 p.m. in Council Chambers at City Hall, unless different or prior notice of a change is posted. Call 297-2422 to confirm meeting dates.</span></span></span></div>

<div style="text-align:justify"><br>
<span style="font-size:11pt"><span style="line-height:1"><span style="font-family:Times New Roman,Times,serif">It is the policy of the Trust to ensure that communications with participants and members of the public with disabilities are as effective as communications with others. Anyone with a disability who requires an accommodation, a modification of policies or procedures, or an auxiliary aid or service in order to participate in this meeting should call (405) 297&shy;-2422 or TDD (405) 297&shy;-2020 at least 48 hours in advance (not including weekends or holidays). The staff will give primary consideration to the choice of auxiliary aid or service requested by the individual with disability. If you need an alternative format of the agenda, or any information provided at this meeting, please call (405) 297-&shy;2422 at least 48 hours before the meeting.</span></span></span>

<div style="text-align:center"><br>
<span style="font-size:11pt"><span style="line-height:1"><font face="Times New Roman, Times, serif"><u>Safety Guidelines</u></font></span></span></div>

<div><span style="font-size:11pt"><span style="line-height:1"><span style="font-family:Times New Roman,Times,serif">The following safety guidelines are in place during the COVID-19 pandemic for meetings in the Council Chamber at City Hall: face coverings are strongly recommended throughout the building (disposable face masks will be available); only the south entrance to City Hall will be open; air purifying machines will be in the Chamber; hand sanitizer machines will be available; and the Chamber will be cleaned and sanitized daily.&nbsp;</span></span></span><br>
&nbsp;</div>
</div>

<div style="text-align:center"><span style="font-size:11pt"><span style="line-height:1"><span style="font-family:Times New Roman,Times,serif"><u>Addressing the Trust</u></span></span></span></div>

<div style="text-align:justify"><span style="font-size:11pt"><span style="line-height:1"><span style="font-family:Times New Roman,Times,serif">Citizens may address the Trust on certain items by signing up to speak and providing the agenda item number, their&nbsp;reason for appearing and their address, but all comments must be relevant to the item. &nbsp;If you wish to address the Trust, you may call 297-2422&nbsp;or you may sign up to speak at the meeting. &nbsp;The Chairman or presiding officer may in his or her discretion prohibit a person from addressing the Trust, or have any person removed from the Council Chamber, if that person commits any disorderly or disruptive behavior, which includes without limitation any of the following: speaking without being recognized by the Chairman or presiding officer; continuing to speak after notice that the speaker&rsquo;s allotted time has expired; presenting comments or material not relevant to the item under discussion; failing to comply with the lawful instructions of the Chairman or presiding officer; engaging in other conduct, activity, or speech that delays, disturbs, interferes, or&nbsp;disrupts&nbsp;the effective or timely conduct of the meeting, or is otherwise violent, threatening, abusive,&nbsp;obscene, or jeopardizing the safety of self or others. A person may also be subject to arrest and removal from the Municipal Building for violation of Oklahoma City Municipal Code 2020,<b> </b>&sect; 30-81 &ndash; Disorderly conduct and/or violation of Okla. Stat. tit. 21, &sect;280- Willfully Disturbing, Interfering With or Disrupting State Business, Agency Operations or Employees. Citizens will be limited to three minutes to speak to the Trust.</span></span></span><br>
&nbsp;</div>

<div style="text-align:center"><span style="font-size:11pt"><span style="line-height:1"><span style="font-family:Times New Roman,Times,serif"><u>Trust Actions</u></span></span></span></div>

<div style="text-align:justify"><span style="font-size:11pt"><span style="line-height:1"><span style="font-family:Times New Roman,Times,serif">The Trust may take any of several actions including but not limited to adopt, approve, ratify, deny, defer, recommend, amend,&nbsp;strike, or continue any item. The Trust is not limited by staff recommendations as to the actions it may take. If more information is needed, the Trust may refer matters to the General Manager or to Legal Counsel, or submit them to committees, boards, commissions, or independent consultants for additional study. The Trust may authorize the General Manager or Legal Counsel to take certain actions. Items may be stricken from the agenda, or no action may be taken.</span></span></span><br>
&nbsp;</div>

<div style="text-align:center"><span style="font-size:11pt"><span style="line-height:1"><span style="font-family:Times New Roman,Times,serif"><u>Consent Docket</u></span></span></span></div>

<div style="text-align:justify"><span style="font-size:11pt"><span style="line-height:1"><span style="font-family:Times New Roman,Times,serif">Consent Docket items are usually approved as a group with the proper motion from a Trustee. Consent Docket items usually involve routine actions or standard contracts. Trustees, staff, or citizens may request discussion or separate consideration of any Consent Docket item. A separate vote may be taken upon the motion of a Trustee.</span></span></span></div>

<div style="text-align:justify">&nbsp;</div>

<div style="text-align:justify"><span style="font-size:11pt"><span style="line-height:1"><span style="font-family:Times New Roman,Times,serif">Call (405) 297&shy;-2422 for more information about the Oklahoma City Water Utilities Trust.</span></span></span></div>
</div>

<div style="text-align: justify;"><br>
<br>
&nbsp;</div>

<div 003c71="" style="border-bottom: 1pt solid windowtext; padding: 0in 0in 1pt; text-align: justify;">&nbsp;</div>

<div>&nbsp;</div>

<div style="text-align: center;"><strong><span style="font-family:Times New Roman,Times,serif;"><span style="font-size:14pt;">AGENDA<br>
OKLAHOMA CITY WATER UTILITIES TRUST<br>
October 25, 2022</span></span></strong></div>

<div 003c71="" style="border-bottom: 1pt solid windowtext; padding: 0in 0in 1pt; text-align: justify; COLOR=">&nbsp;</div>

<div>&nbsp;</div>
<div><table style='width:100%;'><tr><td style='padding-left:0em;'><div class='' data-sectionid='117384'><table width='100%'><tr class='section-row'><td class='number-cell-section'><span class="widthAndRightAlign"><span style="font-family:Times New Roman,Times,serif;"><span style="font-size:12pt;"><strong>I.</strong></span></span></span></td><td class='section-heading'><div class='item-cell section-item-attachments-insert' data-sectiontemplateid='125550' data-meetingid='8531' data-hasattachment='0'><p style="text-align: justify;"><span style="font-family:Times New Roman,Times,serif;"><span style="font-size:12pt;"><strong>Call to Order</strong></span></span></p>
</div></td></tr><tr><td colspan='2'></td></tr></table></div></td></tr></table><table style='width:100%;'><tr><td style='padding-left:0em;'><div class='section-with-items' data-sectionid='117392'><table width='100%'><tr class='section-row'><td class='number-cell-section'><span class="widthAndRightAlign"><span style="font-family:Times New Roman,Times,serif;"><span style="font-size:12pt;"><strong>II.</strong></span></span></span></td><td class='section-heading'><div class='item-cell section-item-attachments-insert' data-sectiontemplateid='125558' data-meetingid='8531' data-hasattachment='0'><p style="text-align: justify;"><span style="font-family:Times New Roman,Times,serif;"><span style="font-size:12pt;"><strong>Approval of Minutes</strong></span></span></p>
</div></td></tr><tr><td colspan='2'><div style='margin-left:0em;' class='meeting-item' data-itemid='216633' data-hasattachments='True'><table class='item-table' style='padding-bottom:5px;'><tr><td class='attachment-cell'><div class='pull-left attachment-icon-holder'><span class='glyphicon glyphicon-paperclip' title='Has Attachments' style='color:#aaa;'></span></div></td><td class='item-cell'><div class='agenda-item' id='AgendaItem_216633'><p style="text-align: justify;"><span style="font-family:Times New Roman,Times,serif;"><span style="line-height:1;"><span style="font-size:12pt;"><span style="line-height:1;"><span style="font-size:12pt;"><span style="font-family:Times New Roman,Times,serif;">&nbsp;Approve the minutes of the October 11, 2022, meeting.</span></span></span></span></span></span></p>
</div><div class="item_contents" id="agenda_item_area_216633">
                        <div id="ConfidentialDocMessage_216633" class="item-confidential-area"></div>
                    <div class="attachment-holder">
                        <a target="_blank" title="View 10-11-2022 OCWUT Minutes - New Window" href="viewer?id=459053&amp;type=2">
                            <span class="glyphicon glyphicon-eye-open"></span></a>&nbsp;&nbsp;
						<a href="/meeting/attachment/459053.pdf?name=10-11-2022 OCWUT Minutes" title="Download 10-11-2022 OCWUT Minutes">
							<span class="glyphicon glyphicon-cloud-download"></span>&nbsp;&nbsp;10-11-2022 OCWUT Minutes</a>
                    </div></div></td></tr></table></div></td></tr></table></div></td></tr></table><table style='width:100%;'><tr><td style='padding-left:0em;'><div class='section-with-items' data-sectionid='117385'><table width='100%'><tr class='section-row'><td class='number-cell-section'><span class="widthAndRightAlign"><span style="font-family:Times New Roman,Times,serif;"><span style="font-size:12pt;"><strong>III.</strong></span></span></span></td><td class='section-heading'><div class='item-cell section-item-attachments-insert' data-sectiontemplateid='125551' data-meetingid='8531' data-hasattachment='0'><p style="text-align: justify;"><span style="font-family:Times New Roman,Times,serif;"><span style="font-size:12pt;"><strong>Consent Docket</strong></span></span></p>
</div></td></tr><tr><td colspan='2'><div style='margin-left:0em;' class='meeting-item' data-itemid='217483' data-hasattachments='True'><table class='item-table' style='padding-bottom:5px;'><tr><td class='attachment-cell'><div class='pull-left attachment-icon-holder'><span class='glyphicon glyphicon-paperclip' title='Has Attachments' style='color:#aaa;'></span></div></td><td class='number-cell'><span style="font-family:Times New Roman,Times,serif;"><span style="font-size:12pt;">A.</span></span></td><td class='item-cell'><div class='agenda-item' id='AgendaItem_217483'><p style="text-align: justify;"><span style="font-family:Times New Roman,Times,serif;"><span style="line-height:1;"><span style="font-size:12pt;"><span style="line-height:1;"><span style="font-size:12pt;"><span style="font-family:Times New Roman,Times,serif;">Receive the Consultant Review Committee Report and authorize negotiation of a contract for engineering services with Bartlett and West, Inc., Project SY-0020, Utilities Facilities Risk Management Plan review and update for South Canadian, Deer Creek, and North Canadian Wastewater Treatment Plants.</span></span></span></span></span></span></p>
</div><div class="item_contents" id="agenda_item_area_217483">
                        <div id="ConfidentialDocMessage_217483" class="item-confidential-area"></div>
                    <div class="attachment-holder"><a target="_blank" href="viewer?id=23891&type=0" title="View OCWUT Memo - New Window"><span class="glyphicon glyphicon-eye-open"></span></a>&nbsp;&nbsp;
<a href="/meeting/document/23891.pdf?name=OCWUT%20Memo" title="Download OCWUT Memo"><span class="glyphicon glyphicon-cloud-download"></span>&nbsp;&nbsp;OCWUT Memo</a>
</div><div class="attachment-holder">
                        <a target="_blank" title="View SY-0020 Consultant Review Committee Report - New Window" href="viewer?id=459115&amp;type=2">
                            <span class="glyphicon glyphicon-eye-open"></span></a>&nbsp;&nbsp;
						<a href="/meeting/attachment/459115.pdf?name=SY-0020 Consultant Review Committee Report" title="Download SY-0020 Consultant Review Committee Report">
							<span class="glyphicon glyphicon-cloud-download"></span>&nbsp;&nbsp;SY-0020 Consultant Review Committee Report</a>
                    </div></div></td></tr></table></div><div style='margin-left:0em;' class='meeting-item' data-itemid='217403' data-hasattachments='True'><table class='item-table' style='padding-bottom:5px;'><tr><td class='attachment-cell'><div class='pull-left attachment-icon-holder'><span class='glyphicon glyphicon-paperclip' title='Has Attachments' style='color:#aaa;'></span></div></td><td class='number-cell'><span style="font-family:Times New Roman,Times,serif;"><span style="font-size:12pt;">B.</span></span></td><td class='item-cell'><div class='agenda-item' id='AgendaItem_217403'><p style="text-align: justify;"><span style="font-family:Times New Roman,Times,serif;"><span style="line-height:1;"><span style="font-size:12pt;"><span style="line-height:1;"><span style="font-size:12pt;"><span style="font-family:Times New Roman,Times,serif;">Request for Proposals to be advertised, (RFP OCWUT 01-23) force main assessment.</span></span></span></span></span></span></p>
</div><div class="item_contents" id="agenda_item_area_217403">
                        <div id="ConfidentialDocMessage_217403" class="item-confidential-area"><div class="attachment-holder">One or more files are marked confidential or are not available at this time.</div></div>
                    <div class="attachment-holder"><a target="_blank" href="viewer?id=23842&type=0" title="View OCWUT Memo - New Window"><span class="glyphicon glyphicon-eye-open"></span></a>&nbsp;&nbsp;
<a href="/meeting/document/23842.pdf?name=OCWUT%20Memo" title="Download OCWUT Memo"><span class="glyphicon glyphicon-cloud-download"></span>&nbsp;&nbsp;OCWUT Memo</a>
</div></div></td></tr></table></div><div style='margin-left:0em;' class='meeting-item' data-itemid='217538' data-hasattachments='True'><table class='item-table' style='padding-bottom:5px;'><tr><td class='attachment-cell'><div class='pull-left attachment-icon-holder'><span class='glyphicon glyphicon-paperclip' title='Has Attachments' style='color:#aaa;'></span></div></td><td class='number-cell'><span style="font-family:Times New Roman,Times,serif;"><span style="font-size:12pt;">C.</span></span></td><td class='item-cell'><div class='agenda-item' id='AgendaItem_217538'><p style="text-align: justify;"><span style="font-family:Times New Roman,Times,serif;"><span style="line-height:1;"><span style="font-size:12pt;"><span style="line-height:1;"><span style="font-size:12pt;"><span style="font-family:Times New Roman,Times,serif;">Contract for Engineering Services with Tetra Tech, Inc., Project SC-1099, Wastewater Lift Station No. 36 improvements, 6012 SW 119th Street, fee of $250,213.</span></span></span></span></span></span></p>
</div><div class="item_contents" id="agenda_item_area_217538">
                        <div id="ConfidentialDocMessage_217538" class="item-confidential-area"></div>
                    <div class="attachment-holder"><a target="_blank" href="viewer?id=23844&type=0" title="View OCWUT Memo - New Window"><span class="glyphicon glyphicon-eye-open"></span></a>&nbsp;&nbsp;
<a href="/meeting/document/23844.pdf?name=OCWUT%20Memo" title="Download OCWUT Memo"><span class="glyphicon glyphicon-cloud-download"></span>&nbsp;&nbsp;OCWUT Memo</a>
</div><div class="attachment-holder">
                        <a target="_blank" title="View SC-1099c_Primegov - New Window" href="viewer?id=459040&amp;type=2">
                            <span class="glyphicon glyphicon-eye-open"></span></a>&nbsp;&nbsp;
						<a href="/meeting/attachment/459040.pdf?name=SC-1099c_Primegov" title="Download SC-1099c_Primegov">
							<span class="glyphicon glyphicon-cloud-download"></span>&nbsp;&nbsp;SC-1099c_Primegov</a>
                    </div></div></td></tr></table></div><div style='margin-left:0em;' class='meeting-item' data-itemid='217399' data-hasattachments='True'><table class='item-table' style='padding-bottom:5px;'><tr><td class='attachment-cell'><div class='pull-left attachment-icon-holder'><span class='glyphicon glyphicon-paperclip' title='Has Attachments' style='color:#aaa;'></span></div></td><td class='number-cell'><span style="font-family:Times New Roman,Times,serif;"><span style="font-size:12pt;">D.</span></span></td><td class='item-cell'><div class='agenda-item' id='AgendaItem_217399'><p style="text-align: justify;"><span style="font-family:Times New Roman,Times,serif;"><span style="line-height:1;"><span style="font-size:12pt;"><span style="line-height:1;"><span style="font-size:12pt;"><span style="font-family:Times New Roman,Times,serif;">Ratifying and approving Addendum No. 1; and rejecting bids, Project WC-0950, waterline replacement, four locations.</span></span></span></span></span></span></p>
</div><div class="item_contents" id="agenda_item_area_217399">
                        <div id="ConfidentialDocMessage_217399" class="item-confidential-area"><div class="attachment-holder">One or more files are marked confidential or are not available at this time.</div></div>
                    <div class="attachment-holder"><a target="_blank" href="viewer?id=23835&type=0" title="View OCWUT MEMO - New Window"><span class="glyphicon glyphicon-eye-open"></span></a>&nbsp;&nbsp;
<a href="/meeting/document/23835.pdf?name=OCWUT%20MEMO" title="Download OCWUT MEMO"><span class="glyphicon glyphicon-cloud-download"></span>&nbsp;&nbsp;OCWUT MEMO</a>
</div><div class="attachment-holder">
                        <a target="_blank" title="View WC-0950 Addendum Signature Page - New Window" href="viewer?id=459016&amp;type=2">
                            <span class="glyphicon glyphicon-eye-open"></span></a>&nbsp;&nbsp;
						<a href="/meeting/attachment/459016.pdf?name=WC-0950 Addendum Signature Page" title="Download WC-0950 Addendum Signature Page">
							<span class="glyphicon glyphicon-cloud-download"></span>&nbsp;&nbsp;WC-0950 Addendum Signature Page</a>
                    </div></div></td></tr></table></div><div style='margin-left:0em;' class='meeting-item' data-itemid='217401' data-hasattachments='True'><table class='item-table' style='padding-bottom:5px;'><tr><td class='attachment-cell'><div class='pull-left attachment-icon-holder'><span class='glyphicon glyphicon-paperclip' title='Has Attachments' style='color:#aaa;'></span></div></td><td class='number-cell'><span style="font-family:Times New Roman,Times,serif;"><span style="font-size:12pt;">E.</span></span></td><td class='item-cell'><div class='agenda-item' id='AgendaItem_217401'><p style="text-align: justify;"><span style="font-family:Times New Roman,Times,serif;"><span style="line-height:1;"><span style="font-size:12pt;"><span style="line-height:1;"><span style="font-size:12pt;"><span style="font-family:Times New Roman,Times,serif;">1. Renewal of the Pricing Agreement with Core &amp; Main LP (R23-C209010), brass meter service materials, estimated annual cost $250,000, November 5, 2022, through November 4, 2025; and</span></span></span><span style="font-family:Arial, sans-serif"><span style="font-family:&quot;Times New Roman&quot;,serif"><w:sdtpr></w:sdtpr></span></span><br>
<span style="line-height:1;"><span style="font-size:12pt;"><span style="font-family:Times New Roman,Times,serif;">2. Resolution authorizing the open market purchase of brass meter service materials for no bid items, related, and associated items not available on a pricing agreement (OM23-C209012), estimated annual cost $50,000, November 5, 2022, through November 4, 2025.</span></span></span></span></span></span></p>
</div><div class="item_contents" id="agenda_item_area_217401">
                        <div id="ConfidentialDocMessage_217401" class="item-confidential-area"></div>
                    <div class="attachment-holder"><a target="_blank" href="viewer?id=23839&type=0" title="View OCWUT MEMO - New Window"><span class="glyphicon glyphicon-eye-open"></span></a>&nbsp;&nbsp;
<a href="/meeting/document/23839.pdf?name=OCWUT%20MEMO" title="Download OCWUT MEMO"><span class="glyphicon glyphicon-cloud-download"></span>&nbsp;&nbsp;OCWUT MEMO</a>
</div><div class="attachment-holder">
                        <a target="_blank" title="View OM RESOLUTION - New Window" href="viewer?id=459022&amp;type=2">
                            <span class="glyphicon glyphicon-eye-open"></span></a>&nbsp;&nbsp;
						<a href="/meeting/attachment/459022.pdf?name=OM RESOLUTION" title="Download OM RESOLUTION">
							<span class="glyphicon glyphicon-cloud-download"></span>&nbsp;&nbsp;OM RESOLUTION</a>
                    </div><div class="attachment-holder">
                        <a target="_blank" title="View Renewal Letter - New Window" href="viewer?id=459023&amp;type=2">
                            <span class="glyphicon glyphicon-eye-open"></span></a>&nbsp;&nbsp;
						<a href="/meeting/attachment/459023.pdf?name=Renewal Letter" title="Download Renewal Letter">
							<span class="glyphicon glyphicon-cloud-download"></span>&nbsp;&nbsp;Renewal Letter</a>
                    </div></div></td></tr></table></div><div style='margin-left:0em;' class='meeting-item' data-itemid='217398' data-hasattachments='True'><table class='item-table' style='padding-bottom:5px;'><tr><td class='attachment-cell'><div class='pull-left attachment-icon-holder'><span class='glyphicon glyphicon-paperclip' title='Has Attachments' style='color:#aaa;'></span></div></td><td class='number-cell'><span style="font-family:Times New Roman,Times,serif;"><span style="font-size:12pt;">F.</span></span></td><td class='item-cell'><div class='agenda-item' id='AgendaItem_217398'><p style="text-align: justify;"><span style="font-family:Times New Roman,Times,serif;"><span style="line-height:1;"><span style="font-size:12pt;"><span style="line-height:1;"><span style="font-size:12pt;"><span style="font-family:Times New Roman,Times,serif;">Amendment No. 3 to the contract for engineering services with Burns &amp; McDonnell Engineering Company, Inc., Project WC-0863, Atoka Pipeline pump station five-million-gallon balancing tank replacements, Coalgate, Stonewall, Ada, Konawa, and Macomb, Oklahoma, fee increase of $88,448.</span></span></span></span></span></span></p>
</div><div class="item_contents" id="agenda_item_area_217398">
                        <div id="ConfidentialDocMessage_217398" class="item-confidential-area"></div>
                    <div class="attachment-holder"><a target="_blank" href="viewer?id=23834&type=0" title="View OCWUT Memo - New Window"><span class="glyphicon glyphicon-eye-open"></span></a>&nbsp;&nbsp;
<a href="/meeting/document/23834.pdf?name=OCWUT%20Memo" title="Download OCWUT Memo"><span class="glyphicon glyphicon-cloud-download"></span>&nbsp;&nbsp;OCWUT Memo</a>
</div><div class="attachment-holder">
                        <a target="_blank" title="View WC-0863 Amendment No 3 - New Window" href="viewer?id=459014&amp;type=2">
                            <span class="glyphicon glyphicon-eye-open"></span></a>&nbsp;&nbsp;
						<a href="/meeting/attachment/459014.pdf?name=WC-0863 Amendment No 3" title="Download WC-0863 Amendment No 3">
							<span class="glyphicon glyphicon-cloud-download"></span>&nbsp;&nbsp;WC-0863 Amendment No 3</a>
                    </div></div></td></tr></table></div><div style='margin-left:0em;' class='meeting-item' data-itemid='217458' data-hasattachments='True'><table class='item-table' style='padding-bottom:5px;'><tr><td class='attachment-cell'><div class='pull-left attachment-icon-holder'><span class='glyphicon glyphicon-paperclip' title='Has Attachments' style='color:#aaa;'></span></div></td><td class='number-cell'><span style="font-family:Times New Roman,Times,serif;"><span style="font-size:12pt;">G.</span></span></td><td class='item-cell'><div class='agenda-item' id='AgendaItem_217458'><p style="text-align: justify;"><span style="font-family:Times New Roman,Times,serif;"><span style="line-height:1;"><span style="font-size:12pt;"><span style="line-height:1;"><span style="font-size:12pt;"><span style="font-family:Times New Roman,Times,serif;">Amendment No. 2 and Change Order No. 2 revising the construction contract with Wynn Construction Company, Inc., Project WT-0249-1, emergency Draper filter improvements, Draper Water Treatment Plant, increase of $4,400.</span></span></span></span></span></span></p>
</div><div class="item_contents" id="agenda_item_area_217458">
                        <div id="ConfidentialDocMessage_217458" class="item-confidential-area"><div class="attachment-holder">One or more files are marked confidential or are not available at this time.</div></div>
                    <div class="attachment-holder"><a target="_blank" href="viewer?id=23865&type=0" title="View OCWUT Memo - New Window"><span class="glyphicon glyphicon-eye-open"></span></a>&nbsp;&nbsp;
<a href="/meeting/document/23865.pdf?name=OCWUT%20Memo" title="Download OCWUT Memo"><span class="glyphicon glyphicon-cloud-download"></span>&nbsp;&nbsp;OCWUT Memo</a>
</div><div class="attachment-holder">
                        <a target="_blank" title="View WT-0249-1 Amendment No 2 Change Order No 2 - New Window" href="viewer?id=459074&amp;type=2">
                            <span class="glyphicon glyphicon-eye-open"></span></a>&nbsp;&nbsp;
						<a href="/meeting/attachment/459074.pdf?name=WT-0249-1 Amendment No 2 Change Order No 2" title="Download WT-0249-1 Amendment No 2 Change Order No 2">
							<span class="glyphicon glyphicon-cloud-download"></span>&nbsp;&nbsp;WT-0249-1 Amendment No 2 Change Order No 2</a>
                    </div></div></td></tr></table></div><div style='margin-left:0em;' class='meeting-item' data-itemid='217412' data-hasattachments='True'><table class='item-table' style='padding-bottom:5px;'><tr><td class='attachment-cell'><div class='pull-left attachment-icon-holder'><span class='glyphicon glyphicon-paperclip' title='Has Attachments' style='color:#aaa;'></span></div></td><td class='number-cell'><span style="font-family:Times New Roman,Times,serif;"><span style="font-size:12pt;">H.</span></span></td><td class='item-cell'><div class='agenda-item' id='AgendaItem_217412'><p style="text-align: justify;"><span style="font-family:Times New Roman,Times,serif;"><span style="line-height:1;"><span style="font-size:12pt;"><span style="line-height:1;"><span style="font-size:12pt;"><span style="font-family:Times New Roman,Times,serif;">Amendment No. 1 revising the construction contract with Jordan Contractors, Inc., Project SE-0046, emergency sanitary sewer repair, NE 4th Street and Martin Luther King Avenue, decrease of $4,400, and accepting the project and placing the maintenance bond into effect.</span></span></span></span></span></span></p>
</div><div class="item_contents" id="agenda_item_area_217412">
                        <div id="ConfidentialDocMessage_217412" class="item-confidential-area"><div class="attachment-holder">One or more files are marked confidential or are not available at this time.</div></div>
                    <div class="attachment-holder"><a target="_blank" href="viewer?id=23852&type=0" title="View OCWUT Memo - New Window"><span class="glyphicon glyphicon-eye-open"></span></a>&nbsp;&nbsp;
<a href="/meeting/document/23852.pdf?name=OCWUT%20Memo" title="Download OCWUT Memo"><span class="glyphicon glyphicon-cloud-download"></span>&nbsp;&nbsp;OCWUT Memo</a>
</div><div class="attachment-holder">
                        <a target="_blank" title="View SE-0046 Amendment No 1 - New Window" href="viewer?id=459055&amp;type=2">
                            <span class="glyphicon glyphicon-eye-open"></span></a>&nbsp;&nbsp;
						<a href="/meeting/attachment/459055.pdf?name=SE-0046 Amendment No 1" title="Download SE-0046 Amendment No 1">
							<span class="glyphicon glyphicon-cloud-download"></span>&nbsp;&nbsp;SE-0046 Amendment No 1</a>
                    </div></div></td></tr></table></div><div style='margin-left:0em;' class='meeting-item' data-itemid='217409' data-hasattachments='True'><table class='item-table' style='padding-bottom:5px;'><tr><td class='attachment-cell'><div class='pull-left attachment-icon-holder'><span class='glyphicon glyphicon-paperclip' title='Has Attachments' style='color:#aaa;'></span></div></td><td class='number-cell'><span style="font-family:Times New Roman,Times,serif;"><span style="font-size:12pt;">I.</span></span></td><td class='item-cell'><div class='agenda-item' id='AgendaItem_217409'><p style="text-align: justify;"><span style="font-family:Times New Roman,Times,serif;"><span style="line-height:1;"><span style="font-size:12pt;"><span style="line-height:1;"><span style="font-size:12pt;"><span style="font-family:Times New Roman,Times,serif;">Resolution authorizing the sole source purchase of licensing, subscriptions, and other related software maintenance services for the Water Information Management System from Aquatic Informatics, Inc. (SS23-C239014), estimated annual cost $100,000, November 21, 2022, through November 20, 2025.</span></span></span></span></span></span></p>
</div><div class="item_contents" id="agenda_item_area_217409">
                        <div id="ConfidentialDocMessage_217409" class="item-confidential-area"></div>
                    <div class="attachment-holder"><a target="_blank" href="viewer?id=23850&type=0" title="View OCWUT Memo - New Window"><span class="glyphicon glyphicon-eye-open"></span></a>&nbsp;&nbsp;
<a href="/meeting/document/23850.pdf?name=OCWUT%20Memo" title="Download OCWUT Memo"><span class="glyphicon glyphicon-cloud-download"></span>&nbsp;&nbsp;OCWUT Memo</a>
</div><div class="attachment-holder">
                        <a target="_blank" title="View SS23-C239014 Resolution - New Window" href="viewer?id=459051&amp;type=2">
                            <span class="glyphicon glyphicon-eye-open"></span></a>&nbsp;&nbsp;
						<a href="/meeting/attachment/459051.pdf?name=SS23-C239014 Resolution" title="Download SS23-C239014 Resolution">
							<span class="glyphicon glyphicon-cloud-download"></span>&nbsp;&nbsp;SS23-C239014 Resolution</a>
                    </div><div class="attachment-holder">
                        <a target="_blank" title="View SS23-C239014 Sole Source Letter - New Window" href="viewer?id=459050&amp;type=2">
                            <span class="glyphicon glyphicon-eye-open"></span></a>&nbsp;&nbsp;
						<a href="/meeting/attachment/459050.pdf?name=SS23-C239014 Sole Source Letter" title="Download SS23-C239014 Sole Source Letter">
							<span class="glyphicon glyphicon-cloud-download"></span>&nbsp;&nbsp;SS23-C239014 Sole Source Letter</a>
                    </div></div></td></tr></table></div><div style='margin-left:0em;' class='meeting-item' data-itemid='217400' data-hasattachments='True'><table class='item-table' style='padding-bottom:5px;'><tr><td class='attachment-cell'><div class='pull-left attachment-icon-holder'><span class='glyphicon glyphicon-paperclip' title='Has Attachments' style='color:#aaa;'></span></div></td><td class='number-cell'><span style="font-family:Times New Roman,Times,serif;"><span style="font-size:12pt;">J.</span></span></td><td class='item-cell'><div class='agenda-item' id='AgendaItem_217400'><p style="text-align: justify;"><span style="font-family:Times New Roman,Times,serif;"><span style="line-height:1;"><span style="font-size:12pt;"><span style="line-height:1;"><span style="font-size:12pt;"><span style="font-family:Times New Roman,Times,serif;">Recommend The City of Oklahoma City accept a permanent easement, Project SC-1070, sanitary sewer line replacement, NW Expressway and Linn Avenue.</span></span></span></span></span></span></p>
</div><div class="item_contents" id="agenda_item_area_217400">
                        <div id="ConfidentialDocMessage_217400" class="item-confidential-area"></div>
                    <div class="attachment-holder"><a target="_blank" href="viewer?id=23838&type=0" title="View OCWUT Memo - New Window"><span class="glyphicon glyphicon-eye-open"></span></a>&nbsp;&nbsp;
<a href="/meeting/document/23838.pdf?name=OCWUT%20Memo" title="Download OCWUT Memo"><span class="glyphicon glyphicon-cloud-download"></span>&nbsp;&nbsp;OCWUT Memo</a>
</div><div class="attachment-holder">
                        <a target="_blank" title="View SC-1070 Easement - New Window" href="viewer?id=459020&amp;type=2">
                            <span class="glyphicon glyphicon-eye-open"></span></a>&nbsp;&nbsp;
						<a href="/meeting/attachment/459020.pdf?name=SC-1070 Easement" title="Download SC-1070 Easement">
							<span class="glyphicon glyphicon-cloud-download"></span>&nbsp;&nbsp;SC-1070 Easement</a>
                    </div><div class="attachment-holder">
                        <a target="_blank" title="View SC-1070 Easement Map - New Window" href="viewer?id=459021&amp;type=2">
                            <span class="glyphicon glyphicon-eye-open"></span></a>&nbsp;&nbsp;
						<a href="/meeting/attachment/459021.pdf?name=SC-1070 Easement Map" title="Download SC-1070 Easement Map">
							<span class="glyphicon glyphicon-cloud-download"></span>&nbsp;&nbsp;SC-1070 Easement Map</a>
                    </div></div></td></tr></table></div></td></tr></table></div></td></tr></table><table style='width:100%;'><tr><td style='padding-left:0em;'><div class='section-with-items' data-sectionid='117386'><table width='100%'><tr class='section-row'><td class='number-cell-section'><span class="widthAndRightAlign"><span style="font-family:Times New Roman,Times,serif;"><span style="font-size:12pt;"><strong>IV.</strong></span></span></span></td><td class='section-heading'><div class='item-cell section-item-attachments-insert' data-sectiontemplateid='125552' data-meetingid='8531' data-hasattachment='0'><p style="text-align: justify;"><span style="font-family:Times New Roman,Times,serif;"><span style="font-size:12pt;"><strong>Concurrence Docket</strong></span></span></p>
</div></td></tr><tr><td colspan='2'><div style='margin-left:0em;' class='meeting-item' data-itemid='217480' data-hasattachments='True'><table class='item-table' style='padding-bottom:5px;'><tr><td class='attachment-cell'><div class='pull-left attachment-icon-holder'><span class='glyphicon glyphicon-paperclip' title='Has Attachments' style='color:#aaa;'></span></div></td><td class='number-cell'><span style="font-family:Times New Roman,Times,serif;"><span style="font-size:12pt;">A.</span></span></td><td class='item-cell'><div class='agenda-item' id='AgendaItem_217480'><p style="text-align: justify;"><span style="font-family:Times New Roman,Times,serif;"><span style="line-height:1;"><span style="font-size:12pt;"><span style="line-height:1;"><span style="font-size:12pt;"><span style="font-family:Times New Roman,Times,serif;">Concurrence with The City of Oklahoma City in approving the contract for engineering services with CEC Corporation, Projects PC-0926, widening of Post Road from SE 44th Street to SE 74th Street and WC-1023, 60-inch water transmission main replacement, SE 74th Street from Douglas Boulevard to Post Road; Post Road from SE 74th Street to SE 44th Street; and SE 44th Street from Post Road to Douglas Boulevard, fee of $1,322,692.</span></span></span></span></span></span></p>
</div><div class="item_contents" id="agenda_item_area_217480">
                        <div id="ConfidentialDocMessage_217480" class="item-confidential-area"></div>
                    <div class="attachment-holder"><a target="_blank" href="viewer?id=23889&type=0" title="View OCWUT Memo - New Window"><span class="glyphicon glyphicon-eye-open"></span></a>&nbsp;&nbsp;
<a href="/meeting/document/23889.pdf?name=OCWUT%20Memo" title="Download OCWUT Memo"><span class="glyphicon glyphicon-cloud-download"></span>&nbsp;&nbsp;OCWUT Memo</a>
</div><div class="attachment-holder">
                        <a target="_blank" title="View PC-0926 WC-1023 Engineering Contract - New Window" href="viewer?id=459113&amp;type=2">
                            <span class="glyphicon glyphicon-eye-open"></span></a>&nbsp;&nbsp;
						<a href="/meeting/attachment/459113.pdf?name=PC-0926 WC-1023 Engineering Contract" title="Download PC-0926 WC-1023 Engineering Contract">
							<span class="glyphicon glyphicon-cloud-download"></span>&nbsp;&nbsp;PC-0926 WC-1023 Engineering Contract</a>
                    </div><div class="attachment-holder">
                        <a target="_blank" title="View PC-0926 Availability of Funds - New Window" href="viewer?id=459112&amp;type=2">
                            <span class="glyphicon glyphicon-eye-open"></span></a>&nbsp;&nbsp;
						<a href="/meeting/attachment/459112.pdf?name=PC-0926 Availability of Funds" title="Download PC-0926 Availability of Funds">
							<span class="glyphicon glyphicon-cloud-download"></span>&nbsp;&nbsp;PC-0926 Availability of Funds</a>
                    </div></div></td></tr></table></div></td></tr></table></div></td></tr></table><table style='width:100%;'><tr><td style='padding-left:0em;'><div class='section-with-items' data-sectionid='117393'><table width='100%'><tr class='section-row'><td class='number-cell-section'><span class="widthAndRightAlign"><span style="font-family:Times New Roman,Times,serif;"><span style="font-size:12pt;"><strong>V.</strong></span></span></span></td><td class='section-heading'><div class='item-cell section-item-attachments-insert' data-sectiontemplateid='125559' data-meetingid='8531' data-hasattachment='0'><p style="text-align: justify;"><span style="font-family:Times New Roman,Times,serif;"><span style="font-size:12pt;"><strong>Emergency Construction Contracts by Resolution <u>(Four affirmative votes required for approval.)</u></strong></span></span></p>
</div></td></tr><tr><td colspan='2'><div style='margin-left:0em;' class='meeting-item' data-itemid='217408' data-hasattachments='True'><table class='item-table' style='padding-bottom:5px;'><tr><td class='attachment-cell'><div class='pull-left attachment-icon-holder'><span class='glyphicon glyphicon-paperclip' title='Has Attachments' style='color:#aaa;'></span></div></td><td class='number-cell'><span style="font-family:Times New Roman,Times,serif;"><span style="font-size:12pt;">A.</span></span></td><td class='item-cell'><div class='agenda-item' id='AgendaItem_217408'><p style="text-align: justify;"><span style="font-family:Times New Roman,Times,serif;"><span style="line-height:1;"><span style="font-size:12pt;"><span style="line-height:1;"><span style="font-size:12pt;"><span style="font-family:Times New Roman,Times,serif;">Resolution ratifying the actions of the General Manager in declaring an emergency, approving the bidding documents, approving Addendum No. 1, and awarding a contract to Matthews Trenching Company, Inc., Project SE-0048, emergency sanitary sewer repairs, SW 12th Street and Lee Avenue, $1,161,500; ratifying issuance of an emergency work order; and approving the contract and bonds. </span></span></span><span style="font-family:Arial, sans-serif"><span style="font-family:&quot;Times New Roman&quot;,serif"><w:sdtpr></w:sdtpr></span></span><br>
<span style="line-height:1;"><span style="font-size:12pt;"><span style="font-family:Times New Roman,Times,serif;">(<u>Four affirmative votes required for approval.</u>)</span></span></span></span></span></span></p>
</div><div class="item_contents" id="agenda_item_area_217408">
                        <div id="ConfidentialDocMessage_217408" class="item-confidential-area"><div class="attachment-holder">One or more files are marked confidential or are not available at this time.</div></div>
                    <div class="attachment-holder"><a target="_blank" href="viewer?id=23848&type=0" title="View OCWUT Memo - New Window"><span class="glyphicon glyphicon-eye-open"></span></a>&nbsp;&nbsp;
<a href="/meeting/document/23848.pdf?name=OCWUT%20Memo" title="Download OCWUT Memo"><span class="glyphicon glyphicon-cloud-download"></span>&nbsp;&nbsp;OCWUT Memo</a>
</div><div class="attachment-holder">
                        <a target="_blank" title="View SE-0048 Resolution - New Window" href="viewer?id=459043&amp;type=2">
                            <span class="glyphicon glyphicon-eye-open"></span></a>&nbsp;&nbsp;
						<a href="/meeting/attachment/459043.pdf?name=SE-0048 Resolution" title="Download SE-0048 Resolution">
							<span class="glyphicon glyphicon-cloud-download"></span>&nbsp;&nbsp;SE-0048 Resolution</a>
                    </div><div class="attachment-holder">
                        <a target="_blank" title="View SE-0048 Addendum Signature Page - New Window" href="viewer?id=459046&amp;type=2">
                            <span class="glyphicon glyphicon-eye-open"></span></a>&nbsp;&nbsp;
						<a href="/meeting/attachment/459046.pdf?name=SE-0048 Addendum Signature Page" title="Download SE-0048 Addendum Signature Page">
							<span class="glyphicon glyphicon-cloud-download"></span>&nbsp;&nbsp;SE-0048 Addendum Signature Page</a>
                    </div><div class="attachment-holder">
                        <a target="_blank" title="View SE-0048 Contract and Bonds - New Window" href="viewer?id=459044&amp;type=2">
                            <span class="glyphicon glyphicon-eye-open"></span></a>&nbsp;&nbsp;
						<a href="/meeting/attachment/459044.pdf?name=SE-0048 Contract and Bonds" title="Download SE-0048 Contract and Bonds">
							<span class="glyphicon glyphicon-cloud-download"></span>&nbsp;&nbsp;SE-0048 Contract and Bonds</a>
                    </div></div></td></tr></table></div></td></tr></table></div></td></tr></table><table style='width:100%;'><tr><td style='padding-left:0em;'><div class='section-with-items' data-sectionid='117387'><table width='100%'><tr class='section-row'><td class='number-cell-section'><span class="widthAndRightAlign"><span style="font-family:Times New Roman,Times,serif;"><span style="font-size:12pt;"><strong>VI.</strong></span></span></span></td><td class='section-heading'><div class='item-cell section-item-attachments-insert' data-sectiontemplateid='125553' data-meetingid='8531' data-hasattachment='0'><p style="text-align: justify;"><span style="font-family:Times New Roman,Times,serif;"><span style="font-size:12pt;"><strong>Items for Individual Consideration</strong></span></span></p>
</div></td></tr><tr><td colspan='2'><div style='margin-left:0em;' class='meeting-item' data-itemid='217405' data-hasattachments='True'><table class='item-table' style='padding-bottom:5px;'><tr><td class='attachment-cell'><div class='pull-left attachment-icon-holder'><span class='glyphicon glyphicon-paperclip' title='Has Attachments' style='color:#aaa;'></span></div></td><td class='number-cell'><span style="font-family:Times New Roman,Times,serif;"><span style="font-size:12pt;">A.</span></span></td><td class='item-cell'><div class='agenda-item' id='AgendaItem_217405'><p style="text-align: justify;"><span style="font-family:Times New Roman,Times,serif;"><span style="line-height:1;"><span style="font-size:12pt;"><span style="line-height:1;"><span style="font-size:12pt;"><span style="font-family:Times New Roman,Times,serif;">Resolution of the Oklahoma City Water Utilities Trust authorizing the General Manager, or designee(s), to submit application(s) for American Rescue Plan Act grant from the Oklahoma Water Resources Board in the amount of up to $2,000,000 per community with an OCWUT cost share of fifty percent to fund the expansion and improvement of the Trust&rsquo;s water and wastewater systems; authorizing the General Manager, or designee(s) to submit application(s) for OWRB Oklahoma Dam Rehabilitation Grant funding in the amount of up to $1,000,000 per community for rehabilitation of dams that are considered as high hazard potential; and authorizing the General Manager, or designee(s), to execute any documents associated with the grant application process.</span></span></span></span></span></span></p>
</div><div class="item_contents" id="agenda_item_area_217405">
                        <div id="ConfidentialDocMessage_217405" class="item-confidential-area"></div>
                    <div class="attachment-holder"><a target="_blank" href="viewer?id=23846&type=0" title="View OCWUT Memo - New Window"><span class="glyphicon glyphicon-eye-open"></span></a>&nbsp;&nbsp;
<a href="/meeting/document/23846.pdf?name=OCWUT%20Memo" title="Download OCWUT Memo"><span class="glyphicon glyphicon-cloud-download"></span>&nbsp;&nbsp;OCWUT Memo</a>
</div><div class="attachment-holder">
                        <a target="_blank" title="View Resolution - New Window" href="viewer?id=459042&amp;type=2">
                            <span class="glyphicon glyphicon-eye-open"></span></a>&nbsp;&nbsp;
						<a href="/meeting/attachment/459042.pdf?name=Resolution" title="Download Resolution">
							<span class="glyphicon glyphicon-cloud-download"></span>&nbsp;&nbsp;Resolution</a>
                    </div></div></td></tr></table></div><div style='margin-left:0em;' class='meeting-item' data-itemid='217446' data-hasattachments='True'><table class='item-table' style='padding-bottom:5px;'><tr><td class='attachment-cell'><div class='pull-left attachment-icon-holder'><span class='glyphicon glyphicon-paperclip' title='Has Attachments' style='color:#aaa;'></span></div></td><td class='number-cell'><span style="font-family:Times New Roman,Times,serif;"><span style="font-size:12pt;">B.</span></span></td><td class='item-cell'><div class='agenda-item' id='AgendaItem_217446'><p style="text-align: justify;"><span style="font-family:Times New Roman,Times,serif;"><span style="line-height:1;"><span style="font-size:12pt;"><span style="line-height:1;"><span style="font-size:12pt;"><span style="font-family:Times New Roman,Times,serif;">Public Infrastructure Agreement between the Oklahoma City Economic Development Trust and the Oklahoma City Water Utilities Trust, not to exceed $2,010,000, from Increment District No. 2, City of Oklahoma City, Residential Development budget category in the Amended and Restated Downtown/MAPS Economic Development Project Plan, to the Oklahoma City Water Utilities Trust for public sanitary sewer line improvements from NW 6th Street to North Shartel Avenue and from West Sheridan Avenue to North Western Avenue, which are necessary to support residential development within the Project Plan area.</span></span></span></span></span></span></p>
</div><div class="item_contents" id="agenda_item_area_217446">
                        <div id="ConfidentialDocMessage_217446" class="item-confidential-area"></div>
                    <div class="attachment-holder"><a target="_blank" href="viewer?id=23859&type=0" title="View OCWUT Memo - New Window"><span class="glyphicon glyphicon-eye-open"></span></a>&nbsp;&nbsp;
<a href="/meeting/document/23859.pdf?name=OCWUT%20Memo" title="Download OCWUT Memo"><span class="glyphicon glyphicon-cloud-download"></span>&nbsp;&nbsp;OCWUT Memo</a>
</div><div class="attachment-holder">
                        <a target="_blank" title="View Agreement - New Window" href="viewer?id=459067&amp;type=2">
                            <span class="glyphicon glyphicon-eye-open"></span></a>&nbsp;&nbsp;
						<a href="/meeting/attachment/459067.pdf?name=Agreement" title="Download Agreement">
							<span class="glyphicon glyphicon-cloud-download"></span>&nbsp;&nbsp;Agreement</a>
                    </div><div class="attachment-holder">
                        <a target="_blank" title="View Project Plan Area - New Window" href="viewer?id=459068&amp;type=2">
                            <span class="glyphicon glyphicon-eye-open"></span></a>&nbsp;&nbsp;
						<a href="/meeting/attachment/459068.pdf?name=Project Plan Area" title="Download Project Plan Area">
							<span class="glyphicon glyphicon-cloud-download"></span>&nbsp;&nbsp;Project Plan Area</a>
                    </div></div></td></tr></table></div></td></tr></table></div></td></tr></table><table style='width:100%;'><tr><td style='padding-left:0em;'><div class='' data-sectionid='117388'><table width='100%'><tr class='section-row'><td class='number-cell-section'><span class="widthAndRightAlign"><span style="font-family:Times New Roman,Times,serif;"><span style="font-size:12pt;"><strong>VII.</strong></span></span></span></td><td class='section-heading'><div class='item-cell section-item-attachments-insert' data-sectiontemplateid='125554' data-meetingid='8531' data-hasattachment='0'><p style="text-align: justify;"><span style="font-family:Times New Roman,Times,serif;"><span style="font-size:12pt;"><strong>Items from Trustees</strong></span></span></p>
</div></td></tr><tr><td colspan='2'></td></tr></table></div></td></tr></table><table style='width:100%;'><tr><td style='padding-left:0em;'><div class='section-with-items' data-sectionid='117389'><table width='100%'><tr class='section-row'><td class='number-cell-section'><span class="widthAndRightAlign"><span style="font-family:Times New Roman,Times,serif;"><span style="font-size:12pt;"><strong>VIII.</strong></span></span></span></td><td class='section-heading'><div class='item-cell section-item-attachments-insert' data-sectiontemplateid='125555' data-meetingid='8531' data-hasattachment='0'><p style="text-align: justify;"><span style="font-family:Times New Roman,Times,serif;"><span style="font-size:12pt;"><strong>General Manager Reports</strong></span></span></p>
</div></td></tr><tr><td colspan='2'><div style='margin-left:0em;' class='meeting-item' data-itemid='216632' data-hasattachments='True'><table class='item-table' style='padding-bottom:5px;'><tr><td class='attachment-cell'><div class='pull-left attachment-icon-holder'><span class='glyphicon glyphicon-paperclip' title='Has Attachments' style='color:#aaa;'></span></div></td><td class='number-cell'><span style="font-family:Times New Roman,Times,serif;"><span style="font-size:12pt;">A.</span></span></td><td class='item-cell'><div class='agenda-item' id='AgendaItem_216632'><p style="text-align: justify;"><span style="font-family:Times New Roman,Times,serif;"><span style="line-height:1;"><span style="font-size:12pt;"><span style="line-height:1;"><span style="font-size:12pt;"><span style="font-family:Times New Roman,Times,serif;"><span style="color:#333333">Fiscal Year 2023&nbsp;OCWUT Monthly Proforma and Status Report, September 30, 2022.</span></span></span></span></span></span></span></p>
</div><div class="item_contents" id="agenda_item_area_216632">
                        <div id="ConfidentialDocMessage_216632" class="item-confidential-area"></div>
                    <div class="attachment-holder">
                        <a target="_blank" title="View OCWUT Memo - New Window" href="viewer?id=459088&amp;type=2">
                            <span class="glyphicon glyphicon-eye-open"></span></a>&nbsp;&nbsp;
						<a href="/meeting/attachment/459088.pdf?name=OCWUT Memo" title="Download OCWUT Memo">
							<span class="glyphicon glyphicon-cloud-download"></span>&nbsp;&nbsp;OCWUT Memo</a>
                    </div><div class="attachment-holder">
                        <a target="_blank" title="View Water Proforma - New Window" href="viewer?id=459089&amp;type=2">
                            <span class="glyphicon glyphicon-eye-open"></span></a>&nbsp;&nbsp;
						<a href="/meeting/attachment/459089.pdf?name=Water Proforma" title="Download Water Proforma">
							<span class="glyphicon glyphicon-cloud-download"></span>&nbsp;&nbsp;Water Proforma</a>
                    </div><div class="attachment-holder">
                        <a target="_blank" title="View Wastewater Proforma  - New Window" href="viewer?id=459090&amp;type=2">
                            <span class="glyphicon glyphicon-eye-open"></span></a>&nbsp;&nbsp;
						<a href="/meeting/attachment/459090.pdf?name=Wastewater Proforma " title="Download Wastewater Proforma ">
							<span class="glyphicon glyphicon-cloud-download"></span>&nbsp;&nbsp;Wastewater Proforma </a>
                    </div><div class="attachment-holder">
                        <a target="_blank" title="View Solid Waste Proforma - New Window" href="viewer?id=459091&amp;type=2">
                            <span class="glyphicon glyphicon-eye-open"></span></a>&nbsp;&nbsp;
						<a href="/meeting/attachment/459091.pdf?name=Solid Waste Proforma" title="Download Solid Waste Proforma">
							<span class="glyphicon glyphicon-cloud-download"></span>&nbsp;&nbsp;Solid Waste Proforma</a>
                    </div></div></td></tr></table></div></td></tr></table></div></td></tr></table><table style='width:100%;'><tr><td style='padding-left:0em;'><div class='' data-sectionid='117390'><table width='100%'><tr class='section-row'><td class='number-cell-section'><span class="widthAndRightAlign"><span style="font-family:Times New Roman,Times,serif;"><span style="font-size:12pt;"><strong>IX.</strong></span></span></span></td><td class='section-heading'><div class='item-cell section-item-attachments-insert' data-sectiontemplateid='125556' data-meetingid='8531' data-hasattachment='0'><p style="text-align: justify;"><span style="font-family:Times New Roman,Times,serif;"><span style="font-size:12pt;"><strong>Citizens to be Heard</strong></span></span></p>
</div></td></tr><tr><td colspan='2'></td></tr></table></div></td></tr></table><table style='width:100%;'><tr><td style='padding-left:0em;'><div class='' data-sectionid='117391'><table width='100%'><tr class='section-row'><td class='number-cell-section'><span class="widthAndRightAlign"><span style="font-family:Times New Roman,Times,serif;"><span style="font-size:12pt;"><strong>X.</strong></span></span></span></td><td class='section-heading'><div class='item-cell section-item-attachments-insert' data-sectiontemplateid='125557' data-meetingid='8531' data-hasattachment='0'><p style="text-align: justify;"><span style="font-family:Times New Roman,Times,serif;"><span style="font-size:12pt;"><strong>Adjournment</strong></span></span></p>
</div></td></tr><tr><td colspan='2'></td></tr></table></div></td></tr></table></div></body></html></div>

        <script src="/Content/plugins/isInViewport/isInViewport.js"></script>
        <script src="https://apis.google.com/js/platform.js" async defer></script>

        <script type="text/javascript">

		var _IsAuthenticated = false;
		var _compiledDocId = 49480;
        var fb_visible = false;
        var twitter_visible = false;
        var minipacket_visible = false;

        var itemAttachmentVisibility = 1;
        var isItemSearchAvailable = "True".toLocaleLowerCase();

		
        var _IsVideoLoactionButtonEnabledValue = "False".toLocaleLowerCase();
		var _IsVideoLocationButtonEnabled = ( _IsVideoLoactionButtonEnabledValue === "true");
        var _HasMiniPacketTemplate = ("False".toLocaleLowerCase() === "true");
		var videoUrl = "";
		var tag = document.createElement('script');
		tag.src = "https://www.youtube.com/iframe_api";
		var firstScriptTag = document.getElementsByTagName('script')[0];
		firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
		var player;

        if ("True".toLocaleLowerCase() == "true") {
            fb_visible = true;
        }

        if ("True".toLocaleLowerCase() == "true") {
            twitter_visible = true;
        }

        if ("False".toLocaleLowerCase() == "true") {
            minipacket_visible = true;
		}

            $(document).ready(function () {


                setTimeout(function () {
                    $('#fb-root iframe, .fb-share-button iframe, .flex-parent iframe');

                    var count = 0;

                    $(".fb-share-button iframe").each(function () {
                        $(this).attr('title', 'Facebook Share ' + count);
                        count++
                    });

                    $(".twitter-share-button").each(function () {
                        $(this).attr('title', 'Twitter Share ' + count);
                        count++
                    });
                }, 5000);

                $('.attachment-icon-holder').show();

                if (videoUrl == "") {
                    $('#CloseVideoButton').addClass("hidden");

                    //The below was added if the video does not exist so that it removes the Iframe
                    //and the < html > tag underneath it, removes the videoSection, and removes the
                    //RightFooter logo and allows for easier AODA compliance
                    $("#videoSection").remove();
                    $("#RightFooter").remove();
                    $("#meetingSection").css('top', 0);
                }

                $("#videoscroll").fixedsticky();

                var vid = $('.video');
                var pos = $('.post');
                var top;

                if (videoUrl != "") {
                    top = vid.offset().top - parseFloat(vid.css('margin-top').replace(/auto/, 0));
                } else {
                    top = 0
                }

                $(window).on('scroll',
                    function (event) {
                        // what the y position of the scroll is
                        var y = $(this).scrollTop();

                        // whether that's below the form
                        if (y >= top && videoUrl != "") {
                            // if so, add the fixed class
                            if (vid.is('.aside')) {
                                return;
                            }
                            $('#CloseVideoButton').css('top', '360px');
                            vid.addClass('aside');
                            $('.post').css('width', '70%');
                        } else {
                            // otherwise remove it
                            vid.removeClass('aside');
                            $('.post').css('width', '100%');
                        }
                    });

                $('.meeting-item').each(function (i, item) {
                    var itemId = $(item).data('itemid');

                    loadDownloadItemButton(itemId);
                    // Hide, write onclick to re-appear
                    $('#agenda_item_area_' + itemId).hide();

                });

                renderVideoLocationButtons();

                function appendDownloadAsPdfForSection() {
                    $(".section-item-attachments-insert").each(function () {
                        var sharebuttons = $(this).find(".sharebuttons");
                        if (sharebuttons.length == 0) {
                            if (minipacket_visible) {
                                if (_HasMiniPacketTemplate) {
                                    var elem = $("<div class='sharebuttons pull-right shareButtons'>" +
                                        '<a href="/meetings/SectionWithTemplateType?id=' + $(this).data('sectiontemplateid') + '&meetingTemplateType=2" onclick="event.stopPropagation();" tabindex="0" class="btn btn-primary shareButtons_display shareButtons_dl">'
                                        + '<span class="packet-download">Download Pdf</span></a></div>');
                                    $(this).find("div").prepend(elem);
                                }
                                else {
                                    var elem = $("<div class='sharebuttons pull-right shareButtons'>" + "<button onclick='ariaPDF(this)' aria-expanded='false' href='/meetings/section/" + $(this).data('sectiontemplateid') + "' tabindex='0' class='open-pdfs btn btn-primary shareButtons_display shareButtons_dl'><span class='packet-download'>Open PDF's</span><i class='down'></i></button></div>");
                                    $(this).find("div").prepend(elem);
                                }
                            }
                        } else {
                            if (minipacket_visible) {
                                if (_HasMiniPacketTemplate) {
                                    var elem = $('<a href="/meetings/SectionWithTemplateType?id=' + $(this).data('sectiontemplateid') + '&meetingTemplateType=2" onclick="event.stopPropagation();" tabindex="0" class="btn btn-primary shareButtons_display shareButtons_dl">'
                                        + '<span class="packet-download">Download Pdf</span></a>');
                                    $(this).find(".sharebuttons").prepend(elem);
                                }
                                else {
                                    var elem = $("<button onclick='ariaPDF(this)' aria-expanded='false' href='/meetings/section/" + $(this).data('sectiontemplateid') + "' tabindex='0' class='open-pdfs btn btn-primary shareButtons_display shareButtons_dl'><span class='packet-download'>Open PDF's</span><i class='down'></i></button>");
                                    $(this).find(".sharebuttons").prepend(elem);
                                }
                            }
                        }
                    });
                }


                $('.agenda-item').click(function (event) {
                    var id = this.id.replace("AgendaItem_", "");
                    $('#agenda_item_area_' + id).toggle();
                });

                $('.migrated-meeting-item').click(function () {
                    var itmId = $(this).data('itemid');
                    var videoLocation = $(this).data('videolocation');

                    if (videoLocation) {
                        seekToVideoLocation(videoLocation);
                    }

                    LoadItemAttachmentsFromSourceId(itmId);
                });
                window.twttr = (function (d, s, id) {
                    var js, fjs = d.getElementsByTagName(s)[0],
                        t = window.twttr || {};
                    if (d.getElementById(id)) return t;
                    js = d.createElement(s);
                    js.id = id;
                    js.src = "https://platform.twitter.com/widgets.js";
                    fjs.parentNode.insertBefore(js, fjs);

                    t._e = [];
                    t.ready = function (f) {
                        t._e.push(f);
                    };

                    return t;
                }(document, "script", "twitter-wjs"));


                bindSectionAttachments();

                $('.section-row td .attachment-icon-holder').css('left', '-30px');

            });

            function bindSectionAttachments() {
                function getAnchor(item) {
                    if (item.confidential && item.path == '' && item.pdfPath == '') {
                        html = '<div class="attachment-holder">One or more files are marked confidential or are not available at this time.</div>';
                    } else {
                        var html = '<div class="attachment-holder">'
                            + '<a target="_blank" title="View ' + item.name + '" href="viewer?id=' + item.id + '&type=4">'
                            + '<span class="glyphicon glyphicon-eye-open"></span>'
                            + '</a>&nbsp;&nbsp;<a href="/meetings/sectionattachment?id=' + item.id + '" title="Download ' + item.name + '">'
                            + '<span class="glyphicon glyphicon-cloud-download"></span>&nbsp;&nbsp;' + item.name + ' </a>'
                            + '</div>';
                    }
                    return html;
                }

                function bindClickEvent(instance) {
                    $(instance).on('click', function (args) {
                        var sectionTemplateId = $(this).data('sectiontemplateid');
                        if ($('#sectionattachment_' + sectionTemplateId).hasClass('hidden')) {
                            $('#sectionattachment_' + sectionTemplateId).removeClass('hidden').addClass('display-block');
                        } else {
							$('#sectionattachment_' + sectionTemplateId).addClass('hidden').removeClass('display-block');
                        }
                    });
                }

                $('.section-item-attachments-insert').each(function () {
                    var self = this;
                    var sectionTemplateId = $(self).data('sectiontemplateid');
					var meetingId = $(self).data('meetingid');
                    var hasAttachment = $(self).data('hasattachment') == '1';
                    console.log(sectionTemplateId + ' ' + hasAttachment);
                    if (hasAttachment && typeof sectionTemplateId != 'undefined' && typeof meetingId != 'undefined') {
                        $.get('/api/v2/PublicPortal/GetMeetingSectionAttachments/' + meetingId + '/' + sectionTemplateId, function (result) {
                            var html = '<div class="item_contents section_attachments_contents hidden" id="sectionattachment_' + sectionTemplateId + '"><div "class="item-attachments-area">{0}<div></div>';
                            var anchors = [];
                            for (var i = 0; i < result.length; i++) {
                                anchors.push(getAnchor(result[i]));
                            }

                            html = html.replace('{0}', anchors.join(''));

                            $(self).after(html);

                            bindClickEvent(self);

                        }).fail(function (jqXHR, status, error) {

                            toastr.error('Error: ' + jqXHR.responseJSON.exceptionMessage, jqXHR);
                        });
                    }
                });
            }

            var count = 0;
            function loadDownloadItemButton(id) {

                var hostName = window.location.hostname;
                var itemUrl = "https://" + hostName + "/portal/item?id=" + id;

                if (fb_visible) {
                    var fbBtn = '<div style="display:flex;align-items:center;" class="fb-share-button a2a_button_facebook shareButtons_display shareButtons_fb" data-href="' + itemUrl + '" data-layout="button" data-size="small" data-mobile-iframe="false"><a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=' + itemUrl + '%2F&amp;src=sdkpreparse" class="fb-xfbml-parse-ignore">Share</a></div>';
                } else {
                    var fbBtn = '';
                }

                if (twitter_visible) {
                    var twBtn = '<div class="flex-parent shareButtons_display"><a href="https://twitter.com/share?ref_src=twsrc%5Etfw" data-url="' + itemUrl + '" class="twitter-share-button " data-show-count="false">Tweet</a></div>';
                } else {
                    var twBtn = '';
                }

                if (minipacket_visible) {

                    if (_HasMiniPacketTemplate) {
                        //Single Attachment
                        var dnLoad = "<a href='/meetings/ItemWithTemplateType?id=" + id + "&meetingTemplateType=2' onclick='event.stopPropagation();' tabindex='0' class='btn btn-primary shareButtons_display shareButtons_dl'><span class='packet-download'>Download PDF</span></a>";
                    }
                    else {
                        //Multiple Attachments
                        var dnLoad = "<button onclick='ariaPDF(this)' aria-expanded='false' href='/meetings/item/" + id + "' tabindex='0' class='open-pdfs btn btn-primary shareButtons_display shareButtons_dl'><span class='packet-download'>Open PDF's</span><i class='down'></i></button>";
                    }
                }
                else {
                    var dnLoad = '';
                }

                //View Item page functionality
                if (itemAttachmentVisibility == 2 || itemAttachmentVisibility == 3) {

                    let itemShareUrl = null;

                    if (isItemSearchAvailable == 'true') {
                        itemShareUrl = '/search/itemsearch?meetingItemId=' + id;
                    } else {
                        itemShareUrl = '/portal/item?id=' + id;
                    }

                    shareElem = '<a href="' + itemShareUrl + '" target="_blank" onclick="event.stopPropagation();" tabindex="0" class="btn btn-primary shareButtons_display shareButtons_dl">'
                        + '<span class="packet-download">View Item Details</span></a>';
                }
                else {
                    var shareElem = '';
                }

                var html = "<div id='sharebuttons-" + id + "' data-loaded='Loaded' class='sharebuttons pull-right shareButtons'>" +
                    fbBtn +
                    twBtn +
                    dnLoad +
                    shareElem +
                    "</div>";

                $("#AgendaItem_" + id).prepend(html); //the HTML I returned from the controller

                (function (d, s, id) {
                    var js, fjs = d.getElementsByTagName(s)[0];
                    if (d.getElementById(id)) return;
                    js = d.createElement(s); js.id = id;
                    js.src = 'https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.2';
                    fjs.parentNode.insertBefore(js, fjs);
                }(document, 'script', 'facebook-jssdk'));
                count = count + 3;
            }

        function ariaPDF(e) {
            $(e).attr('aria-expanded', $(e).attr('aria-expanded') === 'false');
        }

		function closeVideo() {
			pauseVideo();
			$('#VideoArea').slideUp(function() { $('#OpenVideoButton').removeClass('hidden'); });
			$('.post').css('width', '90%');
			SetLayout();
		}

		function openVideo() {
			$('#VideoArea').slideDown(function() { $('#OpenVideoButton').addClass('hidden'); });
			$('.post').css('width', '70%');
			SetLayout();
		}

        function SetLayout() {
            var winWidth = $(document).width();
            var winHeight = $(document).height();
            var rightHeight = $('#RightArea2').height();
            if (winWidth < 1000) {
                $('#RightArea2').css('position', 'relative');
                $('#RightArea2').css('right', 0);
                $('#AgendaBody').css('top', rightHeight + 20);
                $('#AgendaBody').css('height', winHeight - rightHeight - 20);
            }
            else {
                $('#RightArea2').css('position', 'fixed');
                $('#RightArea2').css('right', 20);
                $('#AgendaBody').css('top', 0);
                $('#AgendaBody').css('height', '100%');
            }
        }

		function LoadItem(itemId) {
			$.getJSON('/api/meetings/getItemInfo?itemId=' + itemId,
				null,
				function(data) {
					if (data.seconds)
						seekToVideoLocation(data.seconds);
					var attachemntHtml = data.attachments.length > 0
						? '<h2>Attachments</h2>'
						: '<div><h3>This item has no attachments</h3></div>';
					$.each(data.attachments,
						function(indx, itm) {
							attachemntHtml += '<div class="attachment-holder"><a href="' +
								itm.url +
								'">' +
								itm.name +
								'&nbsp;&nbsp;&nbsp;<span class="pull-right glyphicon glyphicon-download"></span></a></div>';
						});
					$('#AttachmentArea').html(attachemntHtml);

					SetLayout();
				});
		}

		/*************************
		* video
		*************************/
		function renderVideoLocationButtons(callback) {
			$('[data-videolocation]').each(function () {
				var videoLocation = $(this).data("videolocation");

				if (_IsVideoLocationButtonEnabled) {
					var elem;

					if ($(this).data("sectionid")) {
						elem = $("<div class='sharebuttons pull-right shareButtons'></div>");
						$(this).find(".section-item-attachments-insert div").prepend(elem);
					}
					else {
						elem = $(this).find(".sharebuttons");
					}

					var playButton = $("<button class='btn btn-primary shareButtons_display shareButtons_dl playvideo' title='Play'><span class='playvideo'>Play</span> <i class='glyphicon glyphicon-play'></i></button>");
					$(playButton).click(function (event) {
						event.stopPropagation();
						seekToVideoLocation(videoLocation);
					});
					$(elem).append(playButton);
				}
				else {
					var elem;
					if ($(this).data("sectionid")) {
						elem = $(this).find(".section-row");
					}
					else {
						elem = $(this);
					}

					$(elem).click(function (event) {
						videoLocationClick(event, videoLocation);
					});
				}
            });

            if (typeof callback == 'function')
                callback();
		}

		function videoLocationClick(event, videoLocation) {
			var clickedTagName = event.target.tagName.toLowerCase();

			if (clickedTagName !== 'a' && clickedTagName !== 'button') {
				seekToVideoLocation(videoLocation);
			}
		}

		function onYouTubeIframeAPIReady() {
			if(videoUrl != "")
				player = new YT.Player('ytplayer', {
					videoId: videoUrl,
					playerVars: {
						'rel': 0
					},
					events: {
						'onStateChange': videoStateChanged
					}
				});
		}

		function pauseVideo() {
			if(player)
				player.pauseVideo();
		}

		var preventSeekToPlaying = false;
		function seekToVideoLocation(seconds) {
			if (player) {
				var preSeekState = player.getPlayerState();
				if (preSeekState != YT.PlayerState.PLAYING && preSeekState != YT.PlayerState.PAUSED)
					preventSeekToPlaying = true;

				player.seekTo(seconds, true);
			}
		}

		function videoStateChanged(event) {
			if (preventSeekToPlaying && event.data == YT.PlayerState.PLAYING) {
				preventSeekToPlaying = false;
				pauseVideo();
			}
		}
		/*************************
		* attachments
		*************************/
            function LoadItemAttachmentsFromSourceId(itemId) {
			$.getJSON('/api/meetingitemattachment/ListPublicFromSourceId?sourceItemId=' + itemId,
				null,
				function(data) {
					var attachmentHtml = "";
					var confHtml = "";
					if (data.length > 0) {
						$.each(data,
							function(indx, itm) {
								if (itm.authorized == true) {
									attachmentHtml += '<div class="attachment-holder' +
										(itm.hasAnnotations ? ' holder-highlight' : '') +
										'">' +
										(_IsAuthenticated
											? '<a target= "_blank" href="viewer?id=' +
											itm.id +
											'&type=2"><span class="glyphicon glyphicon-eye-open"></span></a>&nbsp;&nbsp;'
											: '') +
										'<a href="/meeting/attachment/' +
										itm.id +
										'.pdf?name=' +
										encodeURIComponent(itm.name) +
										'"><span class="glyphicon glyphicon-download"></span>&nbsp;&nbsp;' +
										itm.name +
										'' +
										'</a>' +
										'</div>';
								} else {
									confHtml =
										'<div class="attachment-holder">One or more files are marked confidential or are not available at this time.</div>';
								}
							});
					} else {
						attachmentHtml = "No attachments for item";
					}

					$('#MigratedAttachmentList').html(attachmentHtml + confHtml);
					$('#MigratedAttachmentModal').modal('show');
				});
		}

		function downloadAttachment(id) {
			$.getJSON('/api/meetingitemattachment/GetPublicPdfDownloadUrl/' + id,
					null,
					function(data) {
						window.location = data;
					})
				.fail(function(jqXHR, status, error) {
					//toastr["error"]("Error: " + error);
					handleError('Error: ' + jqXHR.responseJSON.exceptionMessage, jqXHR);
				});
		}

		function downloadDoc(id) {
			$.getJSON('/api/systemdocument/GetPublicPdfDownloadUrl/' + id,
					null,
					function(data) {
						window.location = data;
					})
				.fail(function(jqXHR, status, error) {
					//toastr["error"]("Error: " + error);
					handleError('Error: ' + jqXHR.responseJSON.exceptionMessage, jqXHR);
				});
		}

        </script>
    </section>

    <div class="modal fade" role="dialog" id="MigratedAttachmentModal">
        <div class="modal-dialog modal-sm" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h3 class="modal-title">Attachments</h3>
                </div>
                <div class="modal-body">
                    <div id="MigratedAttachmentList">
                    </div>
                </div>
            </div>
        </div>
    </div>
</body>
</html>`;
