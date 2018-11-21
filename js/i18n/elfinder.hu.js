/**
 * magyar translation
 * @author Gáspár Lajos <info@glsys.eu>
 * @author Bencze Frederik <bencze.frederik@gmail.com>
 * @version 2018-11-21
 */
(function(root, factory) {
	if (typeof define === 'function' && define.amd) {
		define(['elfinder'], factory);
	} else if (typeof exports !== 'undefined') {
		module.exports = factory(require('elfinder'));
	} else {
		factory(root.elFinder);
	}
}(this, function(elFinder) {
	elFinder.prototype.i18.hu = {
		translator : 'Gáspár Lajos &lt;info@glsys.eu&gt;, Bencze Frederik &lt;bencze.frederik@gmail.com&gt;',
		language   : 'magyar',
		direction  : 'ltr',
		dateFormat : 'Y. F. d H:i:s', // will show like: 2018. November. 21 11:46:09
		fancyDateFormat : '$1 H:i', // will show like: Ma 11:46
		nonameDateFormat : 'ymd-His', // noname upload will show like: 181121-114609
		messages   : {

			/********************************** errors **********************************/
			'error'                : 'Hiba',
			'errUnknown'           : 'Ismeretlen hiba.',
			'errUnknownCmd'        : 'Ismeretlen parancs.',
			'errJqui'              : 'Hibás jQuery UI konfiguráció. A "selectable", "draggable" és a "droppable" komponensek szükségesek.',
			'errNode'              : 'Az elFinder "DOM" elem létrehozását igényli.',
			'errURL'               : 'Hibás elFinder konfiguráció! "URL" paraméter nincs megadva.',
			'errAccess'            : 'Hozzáférés megtagadva.',
			'errConnect'           : 'Nem sikerült csatlakozni a kiszolgálóhoz.',
			'errAbort'             : 'Kapcsolat megszakítva.',
			'errTimeout'           : 'Kapcsolat időtúllépés.',
			'errNotFound'          : 'A backend nem elérhető.',
			'errResponse'          : 'Hibás backend válasz.',
			'errConf'              : 'Hibás backend konfiguráció.',
			'errJSON'              : 'PHP JSON modul nincs telepítve.',
			'errNoVolumes'         : 'Nem állnak rendelkezésre olvasható kötetek.',
			'errCmdParams'         : 'érvénytelen paraméterek a parancsban. ("$1")',
			'errDataNotJSON'       : 'A válasz nem JSON típusú adat.',
			'errDataEmpty'         : 'Nem érkezett adat.',
			'errCmdReq'            : 'A backend kérelem parancsnevet igényel.',
			'errOpen'              : '"$1" megnyitása nem sikerült.',
			'errNotFolder'         : 'Az objektum nem egy mappa.',
			'errNotFile'           : 'Az objektum nem egy fájl.',
			'errRead'              : '"$1" olvasása nem sikerült.',
			'errWrite'             : '"$1" írása nem sikerült.',
			'errPerm'              : 'Engedély megtagadva.',
			'errLocked'            : '"$1" zárolás alatt van, és nem lehet átnevezni, mozgatni vagy eltávolítani.',
			'errExists'            : '"$1" nevű fájl már létezik.',
			'errInvName'           : 'Érvénytelen fáljnév.',
			'errInvDirname'        : 'Érvénytelen mappa neve.',  // from v2.1.24 added 12.4.2017
			'errFolderNotFound'    : 'Mappa nem található.',
			'errFileNotFound'      : 'Fájl nem található.',
			'errTrgFolderNotFound' : 'Cél mappa nem található. ("$1")',
			'errPopup'             : 'A böngésző megakadályozta egy felugró ablak megnyitását. A fájl megnyitását tegye lehetővé a böngésző beállitásaiban.',
			'errMkdir'             : '"$1" mappa létrehozása sikertelen.',
			'errMkfile'            : '"$1" fájl létrehozása sikertelen.',
			'errRename'            : '"$1" átnevezése sikertelen.',
			'errCopyFrom'          : 'Fájlok másolása a kötetről nem megengedett. ("$1")',
			'errCopyTo'            : 'Fájlok másolása a kötetre nem megengedett. ("$1")',
			'errMkOutLink'         : 'Hivatkozás létrehozása a root köteten kívül nem megengedett.', // from v2.1 added 03.10.2015
			'errUpload'            : 'Feltöltési hiba.',  // old name - errUploadCommon
			'errUploadFile'        : 'Nem sikerült a fájlt feltölteni. ($1)', // old name - errUpload
			'errUploadNoFiles'     : 'Nem található fájl feltöltéshez.',
			'errUploadTotalSize'   : 'Az adat meghaladja a maximálisan megengedett méretet.', // old name - errMaxSize
			'errUploadFileSize'    : 'A fájl meghaladja a maximálisan megengedett méretet.', //  old name - errFileMaxSize
			'errUploadMime'        : 'A fájltípus nem engedélyezett.',
			'errUploadTransfer'    : '"$1" transzfer hiba.',
			'errUploadTemp'        : 'Sikertelen az ideiglenes fájl léterhezozása feltöltéshez.', // from v2.1 added 26.09.2015
			'errNotReplace'        : 'Az objektum "$1" már létezik ezen a helyen, és nem lehet cserélni másik típusra', // new
			'errReplace'           : '"$1" nem cserélhető.',
			'errSave'              : '"$1" mentése nem sikerült.',
			'errCopy'              : '"$1" másolása nem sikerült.',
			'errMove'              : '"$1" áthelyezése nem sikerült.',
			'errCopyInItself'      : '"$1" nem másolható saját magára.',
			'errRm'                : '"$1" törlése nem sikerült.',
			'errTrash'             : 'Nem lehet belerakni a szemetesbe.', // from v2.1.24 added 30.4.2017
			'errRmSrc'             : 'Forrásfájl(ok) eltávolítása sikertelen.',
			'errExtract'           : '"$1" fájl kibontása nem sikerült.',
			'errArchive'           : 'Arhciválás sikertelen.',
			'errArcType'           : 'Nem támogatott archívum típus.',
			'errNoArchive'         : 'A fájl nem archiválható, vagy nem támogatott archívum típus.',
			'errCmdNoSupport'      : 'A rendszer nem támogatja ezt a parancsot.',
			'errReplByChild'       : 'Az "$ 1" mappát nem cserélheti le ezen elemekre.',
			'errArcSymlinks'       : 'A biztonsági okok miatt megtagadva az archívumok kicsomagolása. Olyan szimbolikus linkeket vagy fájlokat tartalmaz, amelyek nem engedélyezett neveket tartalmaznak.', // edited 24.06.2012
			'errArcMaxSize'        : 'Az archivált fájlok meghaladják a megengedett maximális méreteket.',
			'errResize'            : 'Nem sikerült átméretezni a "$ 1".',
			'errResizeDegree'      : 'Érvénytelen forgatási szög.',  // added 7.3.2013
			'errResizeRotate'      : 'Nem sikerült forgatni a képet.',  // added 7.3.2013
			'errResizeSize'        : 'Érvénytelen képméret.',  // added 7.3.2013
			'errResizeNoChange'    : 'A képméret nem változott.',  // added 7.3.2013
			'errUsupportType'      : 'Nem támogatott fájl típus.',
			'errNotUTF8Content'    : 'A(z) "$1" fájl nem UTF-8 karakterkódolású, ezért nem szerkeszthető.',  // added 9.11.2011
			'errNetMount'          : 'Nem sikerült csatolni "$1".', // added 17.04.2012
			'errNetMountNoDriver'  : 'Nem támogatott protokoll.',     // added 17.04.2012
			'errNetMountFailed'    : 'Csatolás nem sikerült.',         // added 17.04.2012
			'errNetMountHostReq'   : 'Hoszt elfogadva.', // added 18.04.2012
			'errSessionExpires'    : 'Munkameneted inaktivitás miatt lejárt.',
			'errCreatingTempDir'   : 'Unable to create temporary directory: "$1"',
			'errFtpDownloadFile'   : 'Unable to download file from FTP: "$1"',
			'errFtpUploadFile'     : 'Unable to upload file to FTP: "$1"',
			'errFtpMkdir'          : 'Unable to create remote directory on FTP: "$1"',
			'errArchiveExec'       : 'Error while archiving files: "$1"',
			'errExtractExec'       : 'Error while extracting files: "$1"',
			'errNetUnMount'        : 'Unable to unmount', // from v2.1 added 30.04.2012
			'errConvUTF8'          : 'Not convertible to UTF-8', // from v2.1 added 08.04.2014
			'errFolderUpload'      : 'Try Google Chrome, If you\'d like to upload the folder.', // from v2.1 added 26.6.2015
			'errSearchTimeout'     : 'Timed out while searching "$1". Search result is partial.', // from v2.1 added 12.1.2016
			'errReauthRequire'     : 'Újra bejelentkezés szükséges.', // from v2.1.10 added 24.3.2016
			'errMaxTargets'        : 'Max number of selectable items is $1.', // from v2.1.17 added 17.10.2016
			'errRestore'           : 'Unable to restore from the trash. Can\'t identify the restore destination.', // from v2.1.24 added 3.5.2017
			'errEditorNotFound'    : 'Editor not found to this file type.', // from v2.1.25 added 23.5.2017
			'errServerError'       : 'Error occurred on the server side.', // from v2.1.25 added 16.6.2017
			'errEmpty'             : 'Unable to empty folder "$1".', // from v2.1.25 added 22.6.2017

			/******************************* commands names ********************************/
			'cmdarchive'   : 'Archívum létrehozása',
			'cmdback'      : 'Vissza',
			'cmdcopy'      : 'Másolás',
			'cmdcut'       : 'Kivágás',
			'cmddownload'  : 'Letöltés',
			'cmdduplicate' : 'Másolat készítés',
			'cmdedit'      : 'Szerkesztés',
			'cmdextract'   : 'Kibontás',
			'cmdforward'   : 'Előre',
			'cmdgetfile'   : 'Fájlok kijelölése',
			'cmdhelp'      : 'Erről a programról...',
			'cmdhome'      : 'Főkönyvtár',
			'cmdinfo'      : 'Tulajdonságok',
			'cmdmkdir'     : 'Új mappa',
			'cmdmkdirin'   : 'Into new folder', // from v2.1.7 added 19.2.2016
			'cmdmkfile'    : 'Új fájl',
			'cmdopen'      : 'Megnyitás',
			'cmdpaste'     : 'Beillesztés',
			'cmdquicklook' : 'Előnézet',
			'cmdreload'    : 'Frissítés',
			'cmdrename'    : 'Átnevezés',
			'cmdrm'        : 'Törlés',
			'cmdtrash'     : 'Into trash', //from v2.1.24 added 29.4.2017
			'cmdrestore'   : 'Visszaállítás', //from v2.1.24 added 3.5.2017
			'cmdsearch'    : 'Keresés',
			'cmdup'        : 'Ugrás a szülőmappába',
			'cmdupload'    : 'Feltöltés',
			'cmdview'      : 'Megtekint',
			'cmdresize'    : 'Újraméretezés és forgatás',
			'cmdsort'      : 'Rendezés',
			'cmdnetmount'  : 'Hálózati meghatjó', // added 18.04.2012
			'cmdnetunmount': 'Lecsatolás', // from v2.1 added 30.04.2012
			'cmdplaces'    : 'ugrás a helyekre', // added 28.12.2014
			'cmdchmod'     : 'Change mode', // from v2.1 added 20.6.2015
			'cmdopendir'   : 'Mappa megnyitása', // from v2.1 added 13.1.2016
			'cmdcolwidth'  : 'Oszlop szélesség visszaállítása', // from v2.1.13 added 12.06.2016
			'cmdfullscreen': 'Teljes képernyő', // from v2.1.15 added 03.08.2016
			'cmdmove'      : 'Mozgatás', // from v2.1.15 added 21.08.2016
			'cmdempty'     : 'Üres mappa', // from v2.1.25 added 22.06.2017
			'cmdundo'      : 'Vissza', // from v2.1.27 added 31.07.2017
			'cmdredo'      : 'Előre', // from v2.1.27 added 31.07.2017
			'cmdpreference': 'Tulajdonságok', // from v2.1.27 added 03.08.2017
			'cmdselectall' : 'Minden kijelőlés', // from v2.1.28 added 15.08.2017
			'cmdselectnone': 'Kijelőlés megszüntetése', // from v2.1.28 added 15.08.2017
			'cmdselectinvert': 'Fordított kijelőlés', // from v2.1.28 added 15.08.2017
			'cmdopennew'   : 'Menyitás új ablakban', // from v2.1.38 added 3.4.2018
			'cmdhide'      : 'Tulajdonságok elrejtése', // from v2.1.41 added 24.7.2018

			/*********************************** buttons ***********************************/
			'btnClose'  : 'Bezár',
			'btnSave'   : 'Ment',
			'btnRm'     : 'Töröl',
			'btnApply'  : 'Elfogad',
			'btnCancel' : 'Mégsem',
			'btnNo'     : 'Nem',
			'btnYes'    : 'Igen',
			'btnMount'  : 'Csatol',  // added 18.04.2012
			'btnApprove': 'Ugrás $1 és elfogadás', // from v2.1 added 26.04.2012
			'btnUnmount': 'Lecsatol', // from v2.1 added 30.04.2012
			'btnConv'   : 'Konvertál', // from v2.1 added 08.04.2014
			'btnCwd'    : 'Ide',      // from v2.1 added 22.5.2015
			'btnVolume' : 'Kötet',    // from v2.1 added 22.5.2015
			'btnAll'    : 'Minden',       // from v2.1 added 22.5.2015
			'btnMime'   : 'MIME típus', // from v2.1 added 22.5.2015
			'btnFileName':'Fájlnév',  // from v2.1 added 22.5.2015
			'btnSaveClose': 'Mentés és kilépés', // from v2.1 added 12.6.2015
			'btnBackup' : 'Biztonsági mentés', // fromv2.1 added 28.11.2015
			'btnRename'    : 'Átnevezés',      // from v2.1.24 added 6.4.2017
			'btnRenameAll' : 'Összes átnevezése', // from v2.1.24 added 6.4.2017
			'btnPrevious' : 'Vissza ($1/$2)', // from v2.1.24 added 11.5.2017
			'btnNext'     : 'Következő ($1/$2)', // from v2.1.24 added 11.5.2017
			'btnSaveAs'   : 'Mentés másként', // from v2.1.25 added 24.5.2017

			/******************************** notifications ********************************/
			'ntfopen'     : 'Mappa megnyitás',
			'ntffile'     : 'Fájl megnyitás',
			'ntfreload'   : 'Mappa tartalmának frissítése',
			'ntfmkdir'    : 'Mappa létrehozása',
			'ntfmkfile'   : 'Fájl létrehozása',
			'ntfrm'       : 'Fájlok törélse',
			'ntfcopy'     : 'Fájlok másolása',
			'ntfmove'     : 'Fájlok áthelyezése',
			'ntfprepare'  : 'Prepare to copy files',
			'ntfrename'   : 'Fájlok átnevezése',
			'ntfupload'   : 'Fájlok feltöltése',
			'ntfdownload' : 'Fájlok letöltése',
			'ntfsave'     : 'Fájlok mentése',
			'ntfarchive'  : 'Archívum létrehozása',
			'ntfextract'  : 'Kibontás archívumból',
			'ntfsearch'   : 'Fájlok keresése',
			'ntfresize'   : 'Képek újraméretezése',
			'ntfsmth'     : 'Csinál valamit >_<',
			'ntfloadimg'  : 'Képek betöltése',
			'ntfnetmount' : 'Hálózati meghajtó csatolása', // added 18.04.2012
			'ntfnetunmount': 'Hálózati meghajtó leválasztása', // from v2.1 added 30.04.2012
			'ntfdim'      : 'Acquiring image dimension', // added 20.05.2013
			'ntfreaddir'  : 'Reading folder infomation', // from v2.1 added 01.07.2013
			'ntfurl'      : 'URL link kérése', // from v2.1 added 11.03.2014
			'ntfchmod'    : 'Changing file mode', // from v2.1 added 20.6.2015
			'ntfpreupload': 'Verifying upload file name', // from v2.1 added 31.11.2015
			'ntfzipdl'    : 'Creating a file for download', // from v2.1.7 added 23.1.2016
			'ntfparents'  : 'Getting path infomation', // from v2.1.17 added 2.11.2016
			'ntfchunkmerge': 'Processing the uploaded file', // from v2.1.17 added 2.11.2016
			'ntftrash'    : 'Doing throw in the trash', // from v2.1.24 added 2.5.2017
			'ntfrestore'  : 'Doing restore from the trash', // from v2.1.24 added 3.5.2017
			'ntfchkdir'   : 'Checking destination folder', // from v2.1.24 added 3.5.2017
			'ntfundo'     : 'Undoing previous operation', // from v2.1.27 added 31.07.2017
			'ntfredo'     : 'Redoing previous undone', // from v2.1.27 added 31.07.2017
			'ntfchkcontent' : 'Checking contents', // from v2.1.41 added 3.8.2018

			/*********************************** volumes *********************************/
			'volume_Trash' : 'Kuka', //from v2.1.24 added 29.4.2017

			/************************************ dates **********************************/
			'dateUnknown' : 'Ismeretlen',
			'Today'       : 'Ma',
			'Yesterday'   : 'Tegnap',
			'msJan'       : 'jan',
			'msFeb'       : 'febr',
			'msMar'       : 'márc',
			'msApr'       : 'ápr',
			'msMay'       : 'máj',
			'msJun'       : 'jún',
			'msJul'       : 'júl',
			'msAug'       : 'aug',
			'msSep'       : 'szept',
			'msOct'       : 'okt',
			'msNov'       : 'nov',
			'msDec'       : 'dec',
			'January'     : 'Január',
			'February'    : 'Február',
			'March'       : 'Március',
			'April'       : 'Április',
			'May'         : 'Május',
			'June'        : 'Június',
			'July'        : 'Július',
			'August'      : 'Agusztus',
			'September'   : 'Szeptember',
			'October'     : 'Október',
			'November'    : 'November',
			'December'    : 'December',
			'Sunday'      : 'Vasárnap',
			'Monday'      : 'Hétfő',
			'Tuesday'     : 'Kedd',
			'Wednesday'   : 'Szerda',
			'Thursday'    : 'Csütörtök',
			'Friday'      : 'Péntek',
			'Saturday'    : 'Szombat',
			'Sun'         : 'V',
			'Mon'         : 'H',
			'Tue'         : 'K',
			'Wed'         : 'Sze',
			'Thu'         : 'Cs',
			'Fri'         : 'P',
			'Sat'         : 'Szo',

			/******************************** sort variants ********************************/
			'sortname'          : 'név szerint',
			'sortkind'          : 'típus szerint',
			'sortsize'          : 'méret szerint',
			'sortdate'          : 'dátum szerint',
			'sortFoldersFirst'  : 'Mappák előre',
			'sortperm'          : 'Jogosultság szerint', // from v2.1.13 added 13.06.2016
			'sortmode'          : 'Mód szerint',       // from v2.1.13 added 13.06.2016
			'sortowner'         : 'Tulajdonos szerint',      // from v2.1.13 added 13.06.2016
			'sortgroup'         : 'Csoport szerint',      // from v2.1.13 added 13.06.2016
			'sortAlsoTreeview'  : 'Fastruktúra',  // from v2.1.15 added 01.08.2016

			/********************************** new items **********************************/
			'untitled file.txt' : 'Új fájl.txt', // added 10.11.2015
			'untitled folder'   : 'Új Mappa',   // added 10.11.2015
			'Archive'           : 'Új archivum',  // from v2.1 added 10.11.2015
			'untitled file'     : 'Új fájl.$1',  // from v2.1.41 added 6.8.2018
			'extentionfile'     : '$1: Fájl',    // from v2.1.41 added 6.8.2018
			'extentiontype'     : '$1: $2',      // from v2.1.43 added 17.10.2018

			/********************************** messages **********************************/
			'confirmReq'      : 'Megerősítés szükséges',
			'confirmRm'       : 'Valóban törölni akarja a kijelölt adatokat?<br/>Ez később nem fordítható vissza!',
			'confirmRepl'     : 'Cserélje le a régi fájlt egy újabbra?',
			'confirmRest'     : 'Cserélje ki a meglévő elemet a kukába?', // fromv2.1.24 added 5.5.2017
			'confirmConvUTF8' : 'Nem UTF-8 a karakter kódolás.<br/> Átalakítja UTF-8-ra? <br/> A tartalom az UTF-8-ra váltás után mentésre kerül.', // from v2.1 added 08.04.2014
			'confirmNonUTF8'  : 'A fájl karakterkódolását nem sikerült észlelni. Átmenetileg át kell alakítani az UTF-8-ra, hogy szerkeszthesse. <br/> Kérem, jelölje meg a fájl karakterkódolását.', // from v2.1.19 added 28.11.2016
			'confirmNotSave'  : 'Módosítás sikeres. <br/> A munkád elveszthet, ha nem mented el a változtatásokat.', // from v2.1 added 15.7.2015
			'confirmTrash'    : 'Biztos, hogy az elemeket a kukába kívánja helyezni?', //from v2.1.24 added 29.4.2017
			'apllyAll'        : 'Minden elfogadás',
			'name'            : 'Név',
			'size'            : 'Méret',
			'perms'           : 'Jogok',
			'modify'          : 'Módosítva',
			'kind'            : 'Típus',
			'read'            : 'olvasás',
			'write'           : 'írás',
			'noaccess'        : '-',
			'and'             : 'és',
			'unknown'         : 'ismeretlen',
			'selectall'       : 'Összes kijelölése',
			'selectfiles'     : 'Fájlok kijelölése',
			'selectffile'     : 'Első fájl kijelölése',
			'selectlfile'     : 'Utolsó fájl kijelölése',
			'viewlist'        : 'Lista nézet',
			'viewicons'       : 'Ikon nézet',
			'viewSmall'       : 'Kis ikon', // from v2.1.39 added 22.5.2018
			'viewMedium'      : 'Közepes ikon', // from v2.1.39 added 22.5.2018
			'viewLarge'       : 'Nagy ikon', // from v2.1.39 added 22.5.2018
			'viewExtraLarge'  : 'Hatalmas ikon', // from v2.1.39 added 22.5.2018
			'places'          : 'Helyek',
			'calc'            : 'Kalkulálás',
			'path'            : 'Útvonal',
			'aliasfor'        : 'Cél',
			'locked'          : 'Zárolt',
			'dim'             : 'Méretek',
			'files'           : 'Fájlok',
			'folders'         : 'Mappák',
			'items'           : 'Elemek',
			'yes'             : 'igen',
			'no'              : 'nem',
			'link'            : 'Parancsikon',
			'searcresult'     : 'Keresés eredménye',
			'selected'        : 'kijelölt elemek',
			'about'           : 'Névjegy',
			'shortcuts'       : 'Gyorsbillenytyűk',
			'help'            : 'Súgó',
			'webfm'           : 'Fájl menedzser',
			'ver'             : 'Verzió',
			'protocolver'     : 'protokol verzió',
			'homepage'        : 'Projekt honlap',
			'docs'            : 'Dokumentáció',
			'github'          : 'Hozz létre egy új verziót a Github-on',
			'twitter'         : 'Kövess minket a twitter-en',
			'facebook'        : 'Csatlakozz hozzánk a facebook-on',
			'team'            : 'Csapat',
			'chiefdev'        : 'vezető fejlesztő',
			'developer'       : 'fejlesztő',
			'contributor'     : 'külsős hozzájáruló',
			'maintainer'      : 'karbantartó',
			'translator'      : 'fordító',
			'icons'           : 'Ikonok',
			'dontforget'      : 'törölközőt ne felejts el hozni!',
			'shortcutsof'     : 'Gyorsbillentyűk tiltottak',
			'dropFiles'       : 'Fájlok dobása ide',
			'or'              : 'vagy',
			'selectForUpload' : 'fájlok böngészése',
			'moveFiles'       : 'Fájlok áthelyezése',
			'copyFiles'       : 'Fájlok másolása',
			'restoreFiles'    : 'Tételek visszaállítása', // from v2.1.24 added 5.5.2017
			'rmFromPlaces'    : 'Távolítsa el a helyekből',
			'aspectRatio'     : 'Képarány',
			'scale'           : 'Méretarány',
			'width'           : 'Szélesség',
			'height'          : 'Magasság',
			'resize'          : 'Átmerétez',
			'crop'            : 'Vágás',
			'rotate'          : 'Forgatás',
			'rotate-cw'       : 'Forgatás 90 fokkal balra',
			'rotate-ccw'      : 'Forgatás 90 fokkal jobbra',
			'degree'          : '° ',
			'netMountDialogTitle' : 'Meghajtó csatlakoztatása', // added 18.04.2012
			'protocol'            : 'Protokoll', // added 18.04.2012
			'host'                : 'Hoszt', // added 18.04.2012
			'port'                : 'Protokoll', // added 18.04.2012
			'user'                : 'Felhasználó', // added 18.04.2012
			'pass'                : 'Jelszó', // added 18.04.2012
			'confirmUnmount'      : 'Biztos szeretnéd lecsatolni a(z) $1 kötetet?',  // from v2.1 added 30.04.2012
			'dropFilesBrowser': 'Húzd be vagy másold ide a fájlt', // from v2.1 added 30.05.2012
			'dropPasteFiles'  : 'Húzd be vagy másold ide a linket', // from v2.1 added 07.04.2014
			'encoding'        : 'Dekódolás', // from v2.1 added 19.12.2014
			'locale'          : 'Helyi',   // from v2.1 added 19.12.2014
			'searchTarget'    : 'Kiválasztva: $1',                // from v2.1 added 22.5.2015
			'searchMime'      : 'Keresés MIME típus szerint', // from v2.1 added 22.5.2015
			'owner'           : 'Tulajdonos', // from v2.1 added 20.6.2015
			'group'           : 'Csoport', // from v2.1 added 20.6.2015
			'other'           : 'Egyéb', // from v2.1 added 20.6.2015
			'execute'         : 'Végrehajt', // from v2.1 added 20.6.2015
			'perm'            : 'Jogosultság', // from v2.1 added 20.6.2015
			'mode'            : 'Mód', // from v2.1 added 20.6.2015
			'emptyFolder'     : 'A mappa üres', // from v2.1.6 added 30.12.2015
			'emptyFolderDrop' : 'A mappa üres \\ Húz ide a fájlokat', // from v2.1.6 added 30.12.2015
			'emptyFolderLTap' : 'a mappa üres\\ Kattints hosszan a fájl hozzáadásához', // from v2.1.6 added 30.12.2015
			'quality'         : 'Minőség', // from v2.1.6 added 5.1.2016
			'autoSync'        : 'Autómatikus szinkronizálás',  // from v2.1.6 added 10.1.2016
			'moveUp'          : 'Mozgás fel',  // from v2.1.6 added 18.1.2016
			'getLink'         : 'URL link kérése', // from v2.1.7 added 9.2.2016
			'selectedItems'   : 'kiválasztott elemek ($1)', // from v2.1.7 added 2.19.2016
			'folderId'        : 'Mappa azonosító', // from v2.1.10 added 3.25.2016
			'offlineAccess'   : 'Offilne elérés engedélyezése', // from v2.1.10 added 3.25.2016
			'reAuth'          : 'Újra hitelesítés', // from v2.1.10 added 3.25.2016
			'nowLoading'      : 'Betöltés...', // from v2.1.12 added 4.26.2016
			'openMulti'       : 'Több fájl megnyitása', // from v2.1.12 added 5.14.2016
			'openMultiConfirm': 'Megpróbálja megnyitni az $1 fájlokat. Biztosan szeretné megnyitni a böngészőben?', // from v2.1.12 added 5.14.2016
			'emptySearch'     : 'Keresés nem talált eredményt.', // from v2.1.12 added 5.16.2016
			'editingFile'     : 'Fájl szerkesztése.', // from v2.1.13 added 6.3.2016
			'hasSelected'     : 'You have selected $1 items.', // from v2.1.13 added 6.3.2016
			'hasClipboard'    : 'You have $1 items in the clipboard.', // from v2.1.13 added 6.3.2016
			'incSearchOnly'   : 'Incremental search is only from the current view.', // from v2.1.13 added 6.30.2016
			'reinstate'       : 'Reinstate', // from v2.1.15 added 3.8.2016
			'complete'        : '$1 complete', // from v2.1.15 added 21.8.2016
			'contextmenu'     : 'Context menu', // from v2.1.15 added 9.9.2016
			'pageTurning'     : 'Page turning', // from v2.1.15 added 10.9.2016
			'volumeRoots'     : 'Volume roots', // from v2.1.16 added 16.9.2016
			'reset'           : 'Visszaállítás', // from v2.1.16 added 1.10.2016
			'bgcolor'         : 'Háttérszín', // from v2.1.16 added 1.10.2016
			'colorPicker'     : 'Szín paletta', // from v2.1.16 added 1.10.2016
			'8pxgrid'         : '8px grid', // from v2.1.16 added 4.10.2016
			'enabled'         : 'Engedélyezés', // from v2.1.16 added 4.10.2016
			'disabled'        : 'tiltás', // from v2.1.16 added 4.10.2016
			'emptyIncSearch'  : 'Search results is empty in current view.\\APress [Enter] to expand search target.', // from v2.1.16 added 5.10.2016
			'emptyLetSearch'  : 'First letter search results is empty in current view.', // from v2.1.23 added 24.3.2017
			'textLabel'       : 'Text label', // from v2.1.17 added 13.10.2016
			'minsLeft'        : '$1 mins left', // from v2.1.17 added 13.11.2016
			'openAsEncoding'  : 'Reopen with selected encoding', // from v2.1.19 added 2.12.2016
			'saveAsEncoding'  : 'Save with the selected encoding', // from v2.1.19 added 2.12.2016
			'selectFolder'    : 'Select folder', // from v2.1.20 added 13.12.2016
			'firstLetterSearch': 'First letter search', // from v2.1.23 added 24.3.2017
			'presets'         : 'Presets', // from v2.1.25 added 26.5.2017
			'tooManyToTrash'  : 'It\'s too many items so it can\'t into trash.', // from v2.1.25 added 9.6.2017
			'TextArea'        : 'TextArea', // from v2.1.25 added 14.6.2017
			'folderToEmpty'   : 'Empty the folder "$1".', // from v2.1.25 added 22.6.2017
			'filderIsEmpty'   : 'There are no items in a folder "$1".', // from v2.1.25 added 22.6.2017
			'preference'      : 'Preference', // from v2.1.26 added 28.6.2017
			'language'        : 'Language', // from v2.1.26 added 28.6.2017
			'clearBrowserData': 'Initialize the settings saved in this browser', // from v2.1.26 added 28.6.2017
			'toolbarPref'     : 'Toolbar settings', // from v2.1.27 added 2.8.2017
			'charsLeft'       : '... $1 chars left.',  // from v2.1.29 added 30.8.2017
			'sum'             : 'Összesen', // from v2.1.29 added 28.9.2017
			'roughFileSize'   : 'Rough file size', // from v2.1.30 added 2.11.2017
			'autoFocusDialog' : 'Focus on the element of dialog with mouseover',  // from v2.1.30 added 2.11.2017
			'select'          : 'Select', // from v2.1.30 added 23.11.2017
			'selectAction'    : 'Action when select file', // from v2.1.30 added 23.11.2017
			'useStoredEditor' : 'Open with the editor used last time', // from v2.1.30 added 23.11.2017
			'selectinvert'    : 'Invert selection', // from v2.1.30 added 25.11.2017
			'renameMultiple'  : 'Are you sure you want to rename $1 selected items like $2?<br/>This cannot be undone!', // from v2.1.31 added 4.12.2017
			'batchRename'     : 'Batch átnevezése', // from v2.1.31 added 8.12.2017
			'plusNumber'      : '+ szám', // from v2.1.31 added 8.12.2017
			'asPrefix'        : 'Prefix hozzáadása', // from v2.1.31 added 8.12.2017
			'asSuffix'        : 'Suffix hozzáadása', // from v2.1.31 added 8.12.2017
			'changeExtention' : 'Change extention', // from v2.1.31 added 8.12.2017
			'columnPref'      : 'Columns settings (List view)', // from v2.1.32 added 6.2.2018
			'reflectOnImmediate' : 'All changes will reflect immediately to the archive.', // from v2.1.33 added 2.3.2018
			'reflectOnUnmount'   : 'Any changes will not reflect until un-mount this volume.', // from v2.1.33 added 2.3.2018
			'unmountChildren' : 'The following volume(s) mounted on this volume also unmounted. Are you sure to unmount it?', // from v2.1.33 added 5.3.2018
			'selectionInfo'   : 'Selection Info', // from v2.1.33 added 7.3.2018
			'hashChecker'     : 'Algorithms to show the file hash', // from v2.1.33 added 10.3.2018
			'infoItems'       : 'Info Items (Selection Info Panel)', // from v2.1.38 added 28.3.2018
			'pressAgainToExit': 'Kattintson ide a kilépéshez.', // from v2.1.38 added 1.4.2018
			'toolbar'         : 'Toolbar', // from v2.1.38 added 4.4.2018
			'workspace'       : 'Work Space', // from v2.1.38 added 4.4.2018
			'dialog'          : 'Dialog', // from v2.1.38 added 4.4.2018
			'all'             : 'Minden', // from v2.1.38 added 4.4.2018
			'iconSize'        : 'Ikon méret', // from v2.1.39 added 7.5.2018
			'editorMaximized' : 'Szerkesztő megnyitása teljes képernyőben', // from v2.1.40 added 30.6.2018
			'editorConvNoApi' : 'Because conversion by API is not currently available, please convert on the website.', //from v2.1.40 added 8.7.2018
			'editorConvNeedUpload' : 'After conversion, you must be upload with the item URL or a downloaded file to save the converted file.', //from v2.1.40 added 8.7.2018
			'convertOn'       : 'Convert on the site of $1', // from v2.1.40 added 10.7.2018
			'integrations'    : 'Integráció', // from v2.1.40 added 11.7.2018
			'integrationWith' : 'Az elFinder a következő külső szolgáltatásokat támogatja. Használatot megelőzően kérjük, ellenőrizze a felhasználási feltételeket, az adatvédelmi irányelveket.', // from v2.1.40 added 11.7.2018
			'showHidden'      : 'Rejtett fájlok megjelenítése', // from v2.1.41 added 24.7.2018
			'hideHidden'      : 'Rejtett fájlok elrejtése', // from v2.1.41 added 24.7.2018
			'toggleHidden'    : 'Megjelenítés/Lerejtés ', // from v2.1.41 added 24.7.2018
			'makefileTypes'   : 'Az "Új fájl" létrehozásakor engedélyezett fájltípusok', // from v2.1.41 added 7.8.2018
			'typeOfTextfile'  : 'Szövegfájl típusa', // from v2.1.41 added 7.8.2018
			'add'             : 'Új', // from v2.1.41 added 7.8.2018
			'theme'           : 'Téma', // from v2.1.43 added 19.10.2018
			'default'         : 'Alapértelmezett', // from v2.1.43 added 19.10.2018
			'description'     : 'Leírás', // from v2.1.43 added 19.10.2018
			'website'         : 'Weboldal', // from v2.1.43 added 19.10.2018
			'author'          : 'Szerző', // from v2.1.43 added 19.10.2018
			'email'           : 'E-mail', // from v2.1.43 added 19.10.2018
			'license'         : 'Licenc', // from v2.1.43 added 19.10.2018

			/********************************** mimetypes **********************************/
			'kindUnknown'     : 'Ismeretlen',
			'kindRoot'        : 'Kötet', // from v2.1.16 added 16.10.2016
			'kindFolder'      : 'Mappa',
			'kindSelects'     : 'Kiválasztás', // from v2.1.29 added 29.8.2017
			'kindAlias'       : 'Parancsikon',
			'kindAliasBroken' : 'Hibás parancsikon',
			// applications
			'kindApp'         : 'Alkalmazás',
			'kindPostscript'  : 'Postscript dokumentum',
			'kindMsOffice'    : 'Microsoft Office dokumentum',
			'kindMsWord'      : 'Microsoft Word dokumentum',
			'kindMsExcel'     : 'Microsoft Excel dokumentum',
			'kindMsPP'        : 'Microsoft Powerpoint bemutató',
			'kindOO'          : 'Open Office dokumentum',
			'kindAppFlash'    : 'Flash alkalmazás',
			'kindPDF'         : 'Pdf fájl',
			'kindTorrent'     : 'Bittorrent fájl',
			'kind7z'          : '7z archívum',
			'kindTAR'         : 'TAR archívum',
			'kindGZIP'        : 'GZIP archívum',
			'kindBZIP'        : 'BZIP archívum',
			'kindXZ'          : 'XZ archívum',
			'kindZIP'         : 'ZIP archívum',
			'kindRAR'         : 'RAR archívum',
			'kindJAR'         : 'Java JAR fájl',
			'kindTTF'         : 'TTF betűtípus',
			'kindOTF'         : 'OTF betűtípus',
			'kindRPM'         : 'RPM csomag',
			// texts
			'kindText'        : 'Szöveges dokumentum',
			'kindTextPlain'   : 'Egyszerű szöveg',
			'kindPHP'         : 'PHP forráskód',
			'kindCSS'         : 'Css',
			'kindHTML'        : 'HTML dokumentum',
			'kindJS'          : 'Javascript forráskód',
			'kindRTF'         : 'RTF formátum',
			'kindC'           : 'C forráskód',
			'kindCHeader'     : 'C header forráskód',
			'kindCPP'         : 'C++ forráskód',
			'kindCPPHeader'   : 'C++ header forráskód',
			'kindShell'       : 'Unix shell szkript',
			'kindPython'      : 'Python forráskód',
			'kindJava'        : 'Java forráskód',
			'kindRuby'        : 'Ruby forráskód',
			'kindPerl'        : 'Perl szkript',
			'kindSQL'         : 'SQL forráskód',
			'kindXML'         : 'XML dokumentum',
			'kindAWK'         : 'AWK forráskód',
			'kindCSV'         : 'Vesszővel elválasztott érték',
			'kindDOCBOOK'     : 'Docbook XML dokumentum',
			'kindMarkdown'    : 'Markdown szöveg', // added 20.7.2015
			// images
			'kindImage'       : 'Kép',
			'kindBMP'         : 'BMP kép',
			'kindJPEG'        : 'JPEG kép',
			'kindGIF'         : 'GIF kép',
			'kindPNG'         : 'PNG kép',
			'kindTIFF'        : 'TIFF kép',
			'kindTGA'         : 'TGA kép',
			'kindPSD'         : 'Adobe Photoshop kép',
			'kindXBITMAP'     : 'X bitmap kép',
			'kindPXM'         : 'Pixelmator kép',
			// media
			'kindAudio'       : 'Hangfájl',
			'kindAudioMPEG'   : 'MPEG hangfájl',
			'kindAudioMPEG4'  : 'MPEG-4 hangfájl',
			'kindAudioMIDI'   : 'MIDI hangfájl',
			'kindAudioOGG'    : 'Ogg Vorbis hangfájl',
			'kindAudioWAV'    : 'WAV hangfájl',
			'AudioPlaylist'   : 'MP3 hangfájl',
			'kindVideo'       : 'Film',
			'kindVideoDV'     : 'DV film',
			'kindVideoMPEG'   : 'MPEG film',
			'kindVideoMPEG4'  : 'MPEG-4 film',
			'kindVideoAVI'    : 'AVI film',
			'kindVideoMOV'    : 'Quick Time film',
			'kindVideoWM'     : 'Windows Media film',
			'kindVideoFlash'  : 'Flash film',
			'kindVideoMKV'    : 'Matroska film',
			'kindVideoOGG'    : 'Ogg film'
		}
	};
}));

