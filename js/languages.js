var calLanguages = {
  ar ： { //阿拉伯语
    月： [
      ' كانونالثاني '， ' شباط '， ' آذار '， ' نيسان '， ' مايو '， ' حزيران '， ' تموز '， ' آب '， ' أيلول '， ' تشرينالأول '， ' تشرينالثاني '， ' كانونالأول “
    ]
    dayOfWeekShort ： [
      ' ن '， ' Ë '， ' ع '， ' خ '， ' ج '， ' س '， ' Í '
    ]
    dayOfWeek ： [ ' الأحد '，' الاثنين '，' الثلاثاء '，' الأربعاء '，' الخميس '，' الجمعة '，' السبت '，' الأحد ' ]
  }，
  ro ： { //罗马尼亚语
    月： [
      ' Ianuarie '， ' Februarie '， ' Martie '， ' Aprilie '， ' Mai '， ' Iunie '， ' Iulie '， ' August '， ' Septembrie '， ' Octombrie '， ' Noiembrie '， ' Decembrie '
    ]
    dayOfWeekShort ： [
      ' Du '， ' Lu '， ' Ma '， ' Mi '， ' Jo '， ' Vi '， ' Sâ '
    ]
    dayOfWeek ： [ ' Duminică '，' Luni '，' Marţi '，' Miercuri '，' Joi '，' Vineri '，' Sâmbătă ' ]
  }，
  id ： { //印度尼西亚语
    月： [
      ' Januari '， ' Februari '， ' Maret '， ' April '， ' Mei '， ' Juni '， ' Juli '， ' Agustus '， '九月'， ' Oktober '， '十一月'， ' Desember '
    ]
    dayOfWeekShort ： [
      ' Min '， ' Sen '， ' Sel '， ' Rab '， ' Kam '， ' Jum '， ' Sab '
    ]
    一周中的某天： [ '名谷'，' Senin '，' Selasa '，'拉布'，' Kamis '，'朱马特'，' Sabtu ' ]
  }，
  是： { //冰岛人
    月： [
      ' Janúar '， ' Febrúar '， ' Mars '， ' Apríl '， ' Maí '， ' Júní '， ' Júlí '， ' Ágúst '， '九月'， ' Október '， ' Nóvember '， ' Desember '
    ]
    dayOfWeekShort ： [
      '太阳'， ' Mán '， ' Þrið '， ' Mið '， ' Fim '， ' Fös '， ' Lau '
    ]
    一周中的某天： [ ' Sunnudagur '，' Mánudagur '，' Þriðjudagur '，' Miðvikudagur '，' Fimmtudagur '，' Föstudagur '，' Laugardagur ' ]
  }，
  bg ： { //保加利亚语
    月： [
      ' Януари '， ' Февруари '， ' Март '， ' Април '， ' Май '， ' Юни '， ' Юли '， ' Август '， ' Септември '， ' Октомври '， ' Ноември '， ' Декември '
    ]
    dayOfWeekShort ： [
      ' Нд '， ' Пн '， ' Вт '， ' Ср '， ' Чт '， ' Пт '， ' Сб '
    ]
    dayOfWeek ： [ ' Неделя '，' Понеделник '，' Вторник '，' Сряда '，' Четвъртък '，' Петък '，' Събота ' ]
  }，
  fa ： { //波斯语/波斯语
    月： [
      ' فروردین '， ' اردیبهشت '， ' خرداد '， ' تیر '， ' مرداد '， ' شهریور '， ' مهر '， ' آبان '， ' آذر '， ' دی '， ' بهمن '， ' اسفند '
    ]
    dayOfWeekShort ： [
      ' یکشنبه '， ' دوشنبه '， ' سهشنبه '， ' چهارشنبه '， ' پنجشنبه '， ' جمعه '， ' شنبه '
    ]
    dayOfWeek ： [ ' یکشنبه '，' دوشنبه '，' سهشنبه '，' چهارشنبه '，' پنجشنبه '，' جمعه '，' شنبه '，' یکشنبه ' ]
  }，
  茹： { //俄罗斯人
    月： [
      ' Январь '， ' Февраль '， ' Март '， ' Апрель '， ' Май '， ' Июнь '， ' Июль '， ' Август '， ' Сентябрь '， ' Октябрь '， ' Ноябрь '， ' Декабрь '
    ]
    dayOfWeekShort ： [
      ' Вс '， ' Пн '， ' Вт '， ' Ср '， ' Чт '， ' Пт '， ' Сб '
    ]
    dayOfWeek ： [ ' Воскресенье '，' Понедельник '，' Вторник '，' Среда '，' Четверг '，' Пятница '，' Суббота ' ]
  }，
  英国： { //乌克兰语
    月： [
      ' Січень '， ' Лютий '， ' Березень '， ' Квітень '， ' Травень '， ' Червень '， ' Липень '， ' Серпень '， ' Вересень '， ' Жовтень '， ' Листопад '， ' Грудень '
    ]
    dayOfWeekShort ： [
      ' Ндл '， ' Пнд '， ' Втр '， ' Срд '， ' Чтв '， ' Птн '， ' Сбт '
    ]
    dayOfWeek ： [ ' Неділя '，' Понеділок '，' Вівторок '，' Середа '，' Четвер '，' П \' ятниця '，' Субота ' ]
  }，
  EN ： { //英语
    月： [
      ' 1月'， ' 2月'， ' 3月'， ' 4月'， ' 5月'， ' 6月'， ' 7月'， ' 8月'， ' 9月'， '10月'， '11月'， '12月'
    ]
    dayOfWeekShort ： [
      ' S '， ' M '， ' T '， ' W '， ' T '， ' F '， ' S '
    ]
    dayOfWeek ： [ '星期天'，'星期一'，'星期二'，'星期三'，'星期四'，'星期五'，'星期六' ]，
    postsMonthTip ： '发表于LMM yyyy 的帖子'，
    titleFormat ： ' LMM yyyy '
  }，
  el ： { // Ελληνικά
    月： [
      ' Ιανουάριος '， ' Φεβρουάριος '， ' Μάρτιος '， ' Απρίλιος '， ' Μάιος '， ' Ιούνιος '， ' Ιούλιος '， ' Αύγουστος '， ' Σεπτέμβριος '， ' Οκτώβριος '， ' Νοέμβριος '， ' Δεκέμβριος '
    ]
    dayOfWeekShort ： [
      ' Κυρ '， ' Δευ '， ' Τρι '， ' Τετ '， ' Πεμ '， ' Παρ '， ' Σαβ '
    ]
    一周中的某天： [ ' Κυριακή '，' Δευτέρα '，' Τρίτη '，' Τετάρτη '，' Πέμπτη '，' Παρασκευή '，' Σάββατο ' ]
  }，
  de ： { //德语
    月： [
      ' Januar '， ' Februar '， ' März '， ' April '， ' Mai '， ' Juni '， ' Juli '， ' August '， ' September '， ' Oktober '， ' November '， ' Dezember '
    ]
    dayOfWeekShort ： [
      '所以'， ' Mo '， ' Di '， ' Mi '， ' Do '， ' Fr '， ' Sa '
    ]
    dayOfWeek ： [ ' Sonntag '，' Montag '，' Dienstag '，' Mittwoch '，' Donnerstag '，' Freitag '，' Samstag ' ]
  }，
  nl ： { //荷兰语
    月： [
      ' januari '， ' februari '， ' maart '， ' april '， ' mei '， ' juni '， ' juli '， ' augustus '， ' september '， ' oktober '， ' november '， ' december '
    ]
    dayOfWeekShort ： [
      ' zo '， ' ma '， ' di '， ' wo '， ' do '， ' vr '， ' za '
    ]
    一周中的某天： [ ' zondag '，' maandag '，' dinsdag '，' woensdag '，' donderdag '，' vrijdag '，' zaterdag ' ]
  }，
  tr ： { //土耳其语
    月： [
      ' Ocak '， ' Şubat '， '沃尔玛'， '尼森'， ' Mayıs '， ' Haziran '， ' Temmuz '， ' Ağustos '， ' Eylül '， ' Ekim '， '哈斯木'， ' Aralık '
    ]
    dayOfWeekShort ： [
      ' Paz '， ' Pts '， ' Sal '， ' Çar '， ' Per '， ' Cum '， ' Cts '
    ]
    dayOfWeek ： [ ' Pazar '，' Pazartesi '，' Salı '，' Çarşamba '，' Perşembe '，' Cuma '，' Cumartesi ' ]
  }，
  fr ： { //法语
    月： [
      ' Janvier '， ' Février '， ' Mars '， ' Avril '， ' Mai '， ' Juin '， ' Juillet '， ' Août '， ' Septembre '， ' Octobre '， ' Novembre '， ' Décembre '
    ]
    dayOfWeekShort ： [
      ' Dim '， ' Lun '， ' Mar '， ' Mer '， ' Jeu '， ' Ven '， ' Sam '
    ]
    dayOfWeek ： [ ' dimanche '，' lundi '，' mardi '，' mercredi '，' jeudi '，' vendredi '，' samedi ' ]
  }，
  es ： { //西班牙语
    月： [
      ' Enero '， ' Febrero '， '马索'， '四月'， '梅奥'， ' JUNIO '， '胡'， '阿冈斯托'， ' Septiembre '， ' OCTUBRE '， ' Noviembre '， ' DICIEMBRE '
    ]
    dayOfWeekShort ： [
      ' Dom '， ' Lun '， ' Mar '， ' Mié '， ' Jue '， ' Vie '， ' Sáb '
    ]
    一周中的某天： [ '多明戈'，' Lunes '，'貂'，' Miércoles '，' Jueves '，' Viernes '，' Sábado ' ]
  }，
  th ： { // Thai
    月： [
      'มกราคม'， 'กุมภาพันธ์'， 'มีนาคม'， 'เมษายน'， 'พฤษภาคม'， 'มิถุนายน'， 'กรกฎาคม'， 'สิงหาคม'， 'กันยายน'， 'ตุลาคม'， 'พฤศจิกายน'， 'ธันวาคม'
    ]
    dayOfWeekShort ： [
      'อา。'， 'จ。'， 'อ。'， 'พ。'， 'พฤ。'， 'ศ。'， 'ส。“
    ]
    一周中的某天： [ 'อาทิตย์'，'จันทร์'，'อังคาร'，'พุธ'，'พฤหัส'，'ศุกร์'，'เสาร์'，'อาทิตย์' ]
  }，
  pl ： { //波兰语
    月： [
      ' styczeń '， ' luty '， ' marzec '， ' kwiecień '， ' maj '， ' czerwiec '， ' lipiec '， ' sierpień '， ' wrzesień '， ' październik '， ' listopad '， ' grudzień '
    ]
    dayOfWeekShort ： [
      ' nd '， ' pn '， ' wt '， ' śr '， ' cz '， ' pt '， ' sb '
    ]
    dayOfWeek ： [ ' niedziela '，' poniedziałek '，' wtorek '，' środa '，' czwartek '，' piątek '，' sobota ' ]
  }，
  pt ： { //葡萄牙语
    月： [
      ' Janeiro '， ' Fevereiro '， ' Março '， ' Abril '， ' Maio '， ' Junho '， ' Julho '， ' Agosto '， ' Setembro '， ' Outubro '， ' Novembro '， ' Dezembro '
    ]
    dayOfWeekShort ： [
      ' Dom '， ' Seg '， ' Ter '， ' Qua '， ' Qui '， ' Sex '， ' Sab '
    ]
    dayOfWeek ： [ ' Domingo '，' Segunda '，' Terça '，' Quarta '，' Quinta '，' Sexta '，' Sábado ' ]
  }，
  ch ： { //简体中文
    月： [
      '一月'， '二月'， '三月'， '四月'， '五月'， '六月'， '七月'， '八月'， '九月'， '十月'， '十一月'， '十二月'
    ]
    dayOfWeekShort ： [
      '日'， '一'， '二'， '三'， '四'， '五'， '六'
    ]
  }，
  se ： { //瑞典语
    月： [
      ' Januari '， ' Februari '， ' Mars '， ' April '， ' Maj '， ' Juni '， ' Juli '， ' Augusti '， ' September '， ' Oktober '， ' November '， ' December '
    ]
    dayOfWeekShort ： [
      ' Sön '， ' Mån '， ' Tis '， ' Ons '， ' Tor '， ' Fre '， ' Lör '
    ]
  }，
  kr ： { //韩国人
    月： [
      ' 1 월 '， ' 2 월 '， ' 3 월 '， ' 4 월 '， ' 5 월 '， ' 6 월 '， ' 7 월 '， ' 8 월 '， ' 9 월 '， ' 10 월 '， ' 11 월 '， ' 12 월 '
    ]
    dayOfWeekShort ： [
      ' 일 '， ' 월 '， ' 화 '， ' 수 '， ' 목 '， ' 금 '， ' 토 '
    ]
    一周中的某天： [ ' 일 요 일 '，' 월 요 일 '，' 화 요 일 '，' 수 요 일 '，' 목 요 일 '，' 금 요 일 '，' 토 요 일 ' ]
  }，
  它： { //意大利语
    月： [
      ' Gennaio '， ' Febbraio '， '马索'， '阿普里莱'， ' Maggio的'， '朱尼奥'， ' Luglio '， '阿冈斯托'， '塞滕布雷'， ' Ottobre '， '十一月四日'， ' Dicembre '
    ]
    dayOfWeekShort ： [
      ' Dom '， ' Lun '， ' Mar '， ' Mer '， ' Gio '， ' Ven '， ' Sab '
    ]
    dayOfWeek ： [ ' Domenica '，' Lunedì '，' Martedì '，' Mercoledì '，' Giovedì '，' Venerdì '，' Sabato ' ]
  }，
  da ： { // Dansk
    月： [
      ' 1月'， ' Februar '， ' Marts '， ' April '， ' Maj '， ' Juni '， ' July '， ' August '， ' September '， ' Oktober '， ' November '， ' December '
    ]
    dayOfWeekShort ： [
      ' Søn '， ' Man '， ' Tir '， ' Ons '， ' Tor '， ' Fre '， ' Lør '
    ]
    一周中的某天： [ ' søndag '，' mandag '，' tirsdag '，'星期三'，'星期四'，'星期五'，' lørdag ' ]
  }，
  不： { //挪威语
    月： [
      ' Januar '， ' Februar '， ' Mars '， ' April '， ' Mai '， ' Juni '， ' Juli '， ' August '， ' September '， ' Oktober '， ' November '， ' Desember '
    ]
    dayOfWeekShort ： [
      ' Søn '， ' Man '， ' Tir '， ' Ons '， ' Tor '， ' Fre '， ' Lør '
    ]
    一周中的某天： [ ' Søndag '，' Mandag '，' Tirsdag '，'星期三'，'星期四'，'星期五'，' Lørdag ' ]
  }，
  ja ： { //日本人
    月： [
      ' 1月'， ' 2月'， ' 3月'， ' 4月'， ' 5月'， ' 6月'， ' 7月'， ' 8月'， ' 9月'， ' 10月'， ' 11月'， ' 12月'
    ]
    dayOfWeekShort ： [
      '日'， '月'， '火'， '水'， '木'， '金'， '土'
    ]
    dayOfWeek ： [ '日曜'，'月曜'，'火曜'，'水曜'，'木曜'，'金曜'，'土曜' ]
  }，
  vi ： { //越南人
    月： [
      ' Tháng1 '， ' Tháng2 '， ' Tháng3 '， ' Tháng4 '， ' Tháng5 '， ' Tháng6 '， ' Tháng7 '， ' Tháng8 '， ' Tháng9 '， ' Tháng10 '， ' Tháng11 '， ' Tháng12 '
    ]
    dayOfWeekShort ： [
      ' CN '， ' T2 '， ' T3 '， ' T4 '， ' T5 '， ' T6 '， ' T7 '
    ]
    一周中的某天： [ “楚山一”，“ THU海”，“ THU BA ”，“ THU TU ”，“ THU NAM ”，“ THU SAU ”，“ THU BAY ” ]
  }，
  sl ： { // Slovenščina
    月： [
      ' Januar '， ' Februar '， ' Marec '， ' April '， ' Maj '， ' Junij '， ' Julij '， ' Avgust '， ' September '， ' Oktober '， ' November '， ' December '
    ]
    dayOfWeekShort ： [
      ' Ned '， ' Pon '， ' Tor '， ' Sre '， ' Čet '， ' Pet '， ' Sob '
    ]
    dayOfWeek ： [ ' Nedelja '，' Ponedeljek '，' Torek '，' Sreda '，' Četrtek '，' Petek '，' Sobota ' ]
  }，
  cs ： { // Čeština
    月： [
      ' LEDEN '， ' UNOR '， ' Březen '， ' Duben '， ' Květen '， ' Červen '， ' Červenec '， ' Srpen '， '扎日'， ' Říjen '， ' Listopad '， ' Prosinec '
    ]
    dayOfWeekShort ： [
      ' Ne '， ' Po '， ' Út '， ' St '， ' Čt '， ' Pá '， '所以'
    ]
  }，
  胡： { //匈牙利人
    月： [
      ' Január '， ' Február '， ' Március '， ' Április '， ' Május '， ' Június '， ' Július '， ' Augusztus '， ' Szeptember '， ' Október '， ' November '， ' December '
    ]
    dayOfWeekShort ： [
      ' Va '， ' Hé '， ' Ke '， ' Sze '， ' Cs '， ' Pé '， ' Szo '
    ]
    dayOfWeek ： [ ' vasárnap '，' hétfő '，' kedd '，' szerda '，' csütörtök '，' péntek '，' szombat ' ]
  }，
  az ： { //阿塞拜疆（阿塞拜疆）
    月： [
      ' Yanvar '， ' Fevral '， ' Mart '， ' Aprel '， ' May '， ' Iyun '， ' Iyul '， ' Avqust '， ' Sentyabr '， ' Oktyabr '， ' Noyabr '， ' Dekabr '
    ]
    dayOfWeekShort ： [
      ' B '， ' Be '， ' Ça '， ' Ç '， ' Ca '， ' C '， ' Ş '
    ]
    dayOfWeek ： [ ' Bazar '，' Bazarertəsi '，' Çərşənbəaxşamı '，' Çərşənbə '，' Cüməaxşamı '，' Cümə '，' Şənbə ' ]
  }，
  bs ： { // Bosanski
    月： [
      ' Januar '， ' Februar '， ' Mart '， ' April '， ' Maj '， ' Jun '， ' Jul '， ' Avgust '， ' Septembar '， ' Oktobar '， ' Novembar '， ' Decembar '
    ]
    dayOfWeekShort ： [
      ' Ned '， ' Pon '， ' Uto '， ' Sri '， ' Čet '， ' Pet '， ' Sub '
    ]
    dayOfWeek ： [ ' Nedjelja '，' Ponedjeljak '，' Utorak '，' Srijeda '，' Četvrtak '，' Petak '，' Subota ' ]
  }，
  ca ： { // Català
    月： [
      ' Gener '， ' Febrer '， ' Març '， ' Abril '， ' Maig '， ' Juny '， ' Juliol '， ' Agost '， ' Setembre '， ' Octubre '， ' Novembre '， ' Desembre '
    ]
    dayOfWeekShort ： [
      ' Dg '， ' Dl '， ' Dt '， ' Dc '， ' Dj '， ' Dv '， ' Ds '
    ]
    dayOfWeek ： [ ' Diumenge '，' Dilluns '，' Dimarts '，' Dimecres '，' Dijous '，' Divendres '，' Dissabte ' ]
  }，
  ' en-GB '： { //英语（英国）
    月： [
      ' 1月'， ' 2月'， ' 3月'， ' 4月'， ' 5月'， ' 6月'， ' 7月'， ' 8月'， ' 9月'， '10月'， '11月'， '12月'
    ]
    dayOfWeekShort ： [
      '太阳'， '星期一'， '星期二'， '星期三'， '星期四'， '星期五'， '星期六'
    ]
    dayOfWeek ： [ '星期日'，'星期一'，'星期二'，'星期三'，'星期四'，'星期五'，'星期六' ]
  }，
  et ： { // 'Eesti'
    月： [
      ' Jaanuar '， ' Veebruar '， ' Märts '， ' Aprill '， ' Mai '， ' Juuni '， ' Juuli '， ' August '， ' September '， ' Oktoober '， ' November '， ' Detsember '
    ]
    dayOfWeekShort ： [
      ' P '， ' E '， ' T '， ' K '， ' N '， ' R '， ' L '
    ]
    dayOfWeek ： [ ' Pühapäev '，' Esmaspäev '，' Teisipäev '，' Kolmapäev '，' Neljapäev '，' Reede '，' Laupäev ' ]
  }，
  欧： { // Euskara
    月： [
      ' Urtarrila '， ' Otsaila '， ' Martxoa '， ' Apirila '， ' Maiatza '， ' Ekaina '， ' Uztaila '， ' Abuztua '， ' Iraila '， ' Urria '， ' Azaroa '， ' Abendua '
    ]
    dayOfWeekShort ： [
      ' Ig。'， ' Al。'， ' Ar。'， ' Az。'， ' og。'， '或。'， ' La。'
    ]
    dayOfWeek ： [ ' Igandea '，' Astelehena '，' Asteartea '，' Asteazkena '，' Osteguna '，' Ostirala '，' Larunbata ' ]
  }，
  fi ： { //芬兰语（Suomi）
    月： [
      ' Tammikuu '， ' Helmikuu '， ' Maaliskuu '， ' Huhtikuu '， ' Toukokuu '， ' Kesäkuu '， ' Heinäkuu '， ' Elokuu '， ' Syyskuu '， ' Lokakuu '， ' Marraskuu '， ' Joulukuu '
    ]
    dayOfWeekShort ： [
      ' Su '， ' Ma '， ' Ti '， ' Ke '， ' To '， ' Pe '， ' La '
    ]
    dayOfWeek ： [ ' sunnuntai '，' maanantai '，' tiistai '，' keskiviikko '，' torstai '，' perjantai '，' lauantai ' ]
  }，
  gl ： { // Galego
    月： [
      ' Xan '， ' Feb '， ' Maz '， ' Abr '， ' Mai '， ' Xun '， ' Xul '， ' Ago '， ' Set '， ' Out '， ' Nov '， ' Dec '
    ]
    dayOfWeekShort ： [
      ' Dom '， ' Lun '， ' Mar '， ' Mer '， ' Xov '， ' Ven '， ' Sab '
    ]
    dayOfWeek ： [ ' Domingo '，' Luns '，' Martes '，' Mércores '，' Xoves '，' Venres '，' Sábado ' ]
  }，
  hr ： { // Hrvatski
    月： [
      ' Siječanj '， ' Veljača '， ' Ožujak '， ' Travanj '， ' Svibanj '， ' Lipanj '， ' Srpanj '， ' Kolovoz '， ' Rujan '， ' Listopad '， ' Studeni '， ' Prosinac '
    ]
    dayOfWeekShort ： [
      ' Ned '， ' Pon '， ' Uto '， ' Sri '， ' Čet '， ' Pet '， ' Sub '
    ]
    dayOfWeek ： [ ' Nedjelja '，' Ponedjeljak '，' Utorak '，' Srijeda '，' Četvrtak '，' Petak '，' Subotagg ' ]
  }，
  ko ： { //韩文（한국어）
    月： [
      ' 1 월 '， ' 2 월 '， ' 3 월 '， ' 4 월 '， ' 5 월 '， ' 6 월 '， ' 7 월 '， ' 8 월 '， ' 9 월 '， ' 10 월 '， ' 11 월 '， ' 12 월 '
    ]
    dayOfWeekShort ： [
      ' 일 '， ' 월 '， ' 화 '， ' 수 '， ' 목 '， ' 금 '， ' 토 '
    ]
    一周中的某天： [ ' 일 요 일 '，' 월 요 일 '，' 화 요 일 '，' 수 요 일 '，' 목 요 일 '，' 금 요 일 '，' 토 요 일 ' ]
  }，
  lt ： { //立陶宛语（lietuvių）
    月： [
      ' Sausio '， ' Vasario '， ' Kovo '， ' Balandžio '， ' Gegužės '， ' Birželio '， ' Liepos '， ' Rugpjūčio '， ' Rugsėjo '， ' Spalio '， ' Lapkričio '， ' Gruodžio '
    ]
    dayOfWeekShort ： [
      ' Sek '， ' Pir '， ' Ant '， ' Tre '， ' Ket '， ' Pen '， ' Šeš '
    ]
    dayOfWeek ： [ ' Sekmadienis '，' Pirmadienis '，' Antradienis '，' Trečiadienis '，' Ketvirtadienis '，' Penktadienis '，' Šeštadienis ' ]
  }，
  lv ： { //拉脱维亚语（Latviešu）
    月： [
      ' Janvāris '， ' Februāris '， ' Marts '， ' Aprīlis '， ' Maijs '， ' Jūnijs '， ' Jūlijs '， ' Augusts '， ' Septembris '， ' Oktobris '， ' Novembris '， ' Decembris '
    ]
    dayOfWeekShort ： [
      ' Sv '， ' Pr '， ' Ot '， ' Tr '， ' Ct '， ' Pk '， ' St '
    ]
    dayOfWeek ： [ ' Svētdiena '，' Pirmdiena '，' Otrdiena '，' Trešdiena '，' Ceturtdiena '，' Piektdiena '，' Sestdiena ' ]
  }，
  mk ： { //马其顿语（Македонски）
    月： [
      ' јануари '， ' февруари '， ' март '， ' април '， ' мај '， ' јуни '， ' јули '， ' август '， ' септември '， ' октомври '， ' ноември '， ' декември '
    ]
    dayOfWeekShort ： [
      ' нед '， ' пон '， ' вто '， ' сре '， ' чет '， ' пет '， ' саб '
    ]
    一周中的某天： [ ' Недела '，' Понеделник '，' Вторник '，' Среда '，' Четврток '，' Петок '，' Сабота ' ]
  }，
  mn ： { //蒙古语（Монгол）
    月： [
      ' 1-рсар '， ' 2-рсар '， ' 3-рсар '， ' 4-рсар '， ' 5-рсар '， ' 6-рсар '， ' 7-рсар '， ' 8-ссар '， ' 9-рсар '， ' 10-рсар '， ' 11-рсар '， ' 12-рсар '
    ]
    dayOfWeekShort ： [
      ' Дав '， ' Мяг '， ' Лха '， ' Пүр '， ' Бсн '， ' Бям '， ' Ням '
    ]
    dayOfWeek ： [ ' Даваа '，' Мягмар '，' Лхагва '，' Пүрэв '，' Баасан '，' Бямба '，' Ням ' ]
  }，
  ' pt-BR '： { // Português（巴西）
    月： [
      ' Janeiro '， ' Fevereiro '， ' Março '， ' Abril '， ' Maio '， ' Junho '， ' Julho '， ' Agosto '， ' Setembro '， ' Outubro '， ' Novembro '， ' Dezembro '
    ]
    dayOfWeekShort ： [
      ' Dom '， ' Seg '， ' Ter '， ' Qua '， ' Qui '， ' Sex '， ' Sáb '
    ]
    dayOfWeek ： [ ' Domingo '，' Segunda '，' Terça '，' Quarta '，' Quinta '，' Sexta '，' Sábado ' ]
  }，
  sk ： { // Slovenčina
    月： [
      ' Január '， ' Február '， ' Marec '， ' Apríl '， ' Máj '， ' Jún '， ' Júl '， ' August '， ' September '， ' Október '， ' November '， ' December '
    ]
    dayOfWeekShort ： [
      ' Ne '， ' Po '， ' Ut '， ' St '， ' Št '， ' Pi '， ' So '
    ]
    一周中的某天： [ ' Nedeľa '，' Pondelok '，' Utorok '，' Streda '，' Štvrtok '，' Piatok '，'博塔' ]
  }，
  sq ： { //阿尔巴尼亚语（Shqip）
    月： [
      ' Janar '， ' Shkurt '， ' Mars '， ' Prill '， ' Maj '， ' Qershor '， ' Korrik '， ' Gusht '， ' Shtator '， ' Tetor '， ' Nëntor '， ' Dhjetor '
    ]
    dayOfWeekShort ： [
      '死'， ' Hën '， ' Mar '， ' Mër '， ' Enj '， ' Pre '， ' Shtu '
    ]
    dayOfWeek ： [ ' E Diel '，' EHënë '，' EMartē '，' EMërkurë '，' E Enjte '，' E Premte '，' EShtunë ' ]
  }，
  ' sr-YU '： { //塞尔维亚语（Srpski）
    月： [
      ' Januar '， ' Februar '， ' Mart '， ' April '， ' Maj '， ' Jun '， ' Jul '， ' Avgust '， ' Septembar '， ' Oktobar '， ' Novembar '， ' Decembar '
    ]
    dayOfWeekShort ： [
      ' Ned '， ' Pon '， ' Uto '， ' Sre '， ' čet '， ' Pet '， ' Sub '
    ]
    dayOfWeek ： [ ' Nedelja '，' Ponedeljak '，' Utorak '，' Sreda '，' Četvrtak '，' Petak '，' Subota ' ]
  }，
  sr ： { //塞尔维亚西里尔文（Српски）
    月： [
      ' јануар '， ' фебруар '， ' март '， ' април '， ' мај '， ' јун '， ' јул '， ' август '， ' септембар '， ' октобар '， ' новембар '， ' децембар '
    ]
    dayOfWeekShort ： [
      ' нед '， ' пон '， ' уто '， ' сре '， ' чет '， ' пет '， ' суб '
    ]
    dayOfWeek ： [ ' Недеља '，' Понедељак '，' Уторак '，' Среда '，' Четвртак '，' Петак '，' Субота ' ]
  }，
  sv ： { // Svenska
    月： [
      ' Januari '， ' Februari '， ' Mars '， ' April '， ' Maj '， ' Juni '， ' Juli '， ' Augusti '， ' September '， ' Oktober '， ' November '， ' December '
    ]
    dayOfWeekShort ： [
      ' Sön '， ' Mån '， ' Tis '， ' Ons '， ' Tor '， ' Fre '， ' Lör '
    ]
    一周中的某天： [ ' Söndag '，' Måndag '，' Tisdag '，'星期三'，'星期四'，'星期五'，' Lördag ' ]
  }，
  ' zh-TW '： { //繁体中文（繁体中文）
    月： [
      '一月'， '二月'， '三月'， '四月'， '五月'， '六月'， '七月'， '八月'， '九月'， '十月'， '十一月'， '十二月'
    ]
    dayOfWeekShort ： [
      '日'， '一'， '二'， '三'， '四'， '五'， '六'
    ]
    dayOfWeek ： [ '星期日'，'星期一'，'星期二'，'星期三'，'星期四'，'星期五'，'星期六' ]
  }，
  ' zh-CN '： { //简体中文（简体中文）
    月： [
      '一月'， '二月'， '三月'， '四月'， '五月'， '六月'， '七月'， '八月'， '九月'， '十月'， '十一月'， '十二月'
    ]
    dayOfWeekShort ： [
      '日'， '一'， '二'， '三'， '四'， '五'， '六'
    ]
    dayOfWeek ： [ '星期日'，'星期一'，'星期二'，'星期三'，'星期四'，'星期五'，'星期六' ]，
    postsMonthTip ： '查看yyyy年MM月的文章'，
    titleFormat ： ' yyyy年MM月'
  }，
  他： { //希伯来语（עברית）
    月： [
      ' ינואר '， ' פברואר '， ' מרץ '， ' אפריל '， ' מאי '， ' יוני '， ' יולי '， ' אוגוסט '， ' ספטמבר '， ' אוקטובר '， ' נובמבר '， ' דצמבר '
    ]
    dayOfWeekShort ： [
      ' א \' ' ' ב \ ' ' ' ג \' ' ' ד \ ' ' ' ה \' ' ' ו \ ' ' ' שבת '
    ]
    dayOfWeek ： [ ' ראשון '，' שני '，' שלישי '，' רביעי '，' חמישי '，' שישי '，' שבת '，' ראשון ' ]
  }，
  hy ： { //亚美尼亚语
    月： [
      ' ւունվար '， ' Մետրվար '， ' Մարտ '， ' լրիլ '， ' Մայիս '， ' ւունիս '， ' լուլիս '， ' ստոստոս '， ' Սեպտեմբեր '， ' Հոկտեմբեր '， ' Նոյեմբեր '， ' Դեկտեմբեր '
    ]
    dayOfWeekShort ： [
      ' Կի '， ' կրկ '， ' քրք '， ' Չոր '， ' Հնգ '， ' Ուրբ '， ' Շբթ '
    ]
    dayOfWeek ： [ ' րիրակի '，' կրկուշաբթի '，' Երեքշաբթի '，' Չորեքշաբթի '，' Հինգշաբթի '，' Ուրբաթ '，' Շաբաթ ' ]
  }，
  公斤： { //吉尔吉斯
    月： [
      ' Үчтүнайы '， ' Бирдинайы '， ' ЖалганКуран '， ' ЧынКуран '， ' Бугу '， ' Кулжа '， ' Теке '， ' БашОона '， ' АякОона '， ' Тогуздунайы '， ' Жетининайы '， ' Бештинайы '
    ]
    dayOfWeekShort ： [
      ' Жек '， ' Дүй '， ' Шей '， ' Шар '， ' Бей '， ' Жум '， ' Ише '
    ]
    dayOfWeek ： [
      ' Жекшемб '， ' Дүйшөмб '， ' Шейшемб '， ' Шаршемб '， ' Бейшемби '， ' Жума '， ' Ишенб '
    ]
  }，
  rm ： { //罗曼什
    月： [
      ' Schaner '， ' Favrer '， ' Mars '， ' Avrigl '， ' Matg '， ' Zercladur '， ' Fanadur '， ' Avust '， ' Settember '， '十月'， '十一月'， '十二月'
    ]
    dayOfWeekShort ： [
      ' Du '， ' Gli '， ' Ma '， ' Me '， ' Gie '， ' Ve '， ' So '
    ]
    dayOfWeek ： [
      ' Dumengia '， ' Glindesdi '， ' Mardi '， ' Mesemna '， ' Gievgia '， ' Venderdi '， ' Sonda '
    ]
  }，
  ka ： { //格鲁吉亚
    月： [
      ' იანვარი '， ' თებერვალი '， ' მარტი '， ' აპრილი '， ' საისი '， ' ივნისი '， ' ივლისი '， ' აგვისტო '， ' სექტემბერი '， ' ოქტომბერი '， ' ნოემბერი '， ' დეკემბერი '
    ]
    dayOfWeekShort ： [
      ' კვ '， ' ორშ '， ' სამშ '， ' ოთხ '， ' ხუთ '， ' პარ '， ' შაბ '
    ]
    dayOfWeek ： [ ' რირა '，' ორშაბათი '，' სამშაბათი '，' ოთხშაბათი '，' ხუთშაბათი '，' პარასკევი '，' შაბათი ' ]
  }，
};