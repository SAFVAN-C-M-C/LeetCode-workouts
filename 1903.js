var largestOddNumber = function(num) {  
    for(let i=num.length-1;i>=0;i--){
        if(Number(num[i]%2!=0)){
            return num.slice(0,i+1);
        }
    }
    return ''

};
const result=largestOddNumber("69147625380966414753369524746653538962985324367924157127638354346858639061682497939981615381168371030737260720148967808264931214639476254292645633917299403694811266497196706833539101612590163994901333443767348140984101679301481160499100420288661680199034213485484203531607917913860157117132194024702881411287452719367857646391381074916194232154013153506962616845525274102547179899488566948993005195675635584227172662565046070014413068624087100668904172820762381152232822282408475283599940041084791351135053572289206415780978302801041945341952814478674280218893063578037891213974369905585575994084290696904528986061065673374570165276136814980253084376992964447725084232423480041724155369158557490627960242570333295945231582863040296629917217429220416782153926693706325031392804850220619019333593797190000295616225647185594079923045323167781456474370194539117766650527612092815780619022311678706763532237185921268485637114294300037539892313246598669327841783765915382011406526642673512724553375656976487849622494510462506929656851206276729350979344212914650223477804579725184070339821478233720945167670636328630112200848426483336796082896713605494692085649013249519350011546175808038890441040431566851353814837475580309016856471778401902716988371611586686119976759833261705058353458195657285353399824266217758015846687930302853272766983451502528546130873089720738277771184252786309007121024234473057771961997165965667640996833440095224265379322191439070547360157911501016260080265893475978335488357192149679146386643203172665282468549272400020860146051908543271630335636930100090899318781048028354158929093043766136628081226815947470531105833096739798421891426937650167671877628836368850162762922666788093761652289890749935981255977726597640838580501417165789391295651887114860050092449287875703029301125018607429069522233693180620073024266249753740571446956740687354453451466886583483483586267366485320775870894326983443695805045050928467200734293907737295450380162585150204502814353127943379531112359042652742866251085738385545146091935117455537062728167337461215756264126084818762099069319630399516704505998226731234388804851420259364502823134275576729911549044318343695310297711506291792651732816291087392219836915737671052987707459915304450020268387890345029586760304093467541823688101382721051334601842201388253208316816360389173690789476720005214107071634850895123708511919445456972965561927671377188626395612667830557371388740223461446627633041176142152483196863647046568969870368830048379363159229127065934104062911872282471830181796075789849749979905221711486565818981061735631631297557261694963788119389990682013071675321633613179854900490372954585835639981274392255174192581476212360186399454138453156309307968590964598724089921773516681133973670721734024222419830632365401814442484202435094765118615640994147539891370542451908261103565942992023766696922953386194118390934242406628346334889334375186694086542438269285507435095288959470396964535917650471883009954288734496686679899470617069014971103847156756650518860167449234359698504505669375402428617892571402503857626481638493680635853010127896951930485277586703656203634443946896331812335761707317445776262636785089897747594434852953774037676874042076751497534115733099000940656582344538565352326600047091103495611998996511815837466144776186870479666829052565995089142330292764054739862214051318660474733891478524744203594410238735186647741313518302585346581539885217895599098412865581675923831934891800381463429242195973091218527341146133155530153030440778110965984557663454182991269945206419106166910082242168268221756269962083479100593257228703220074859724387129514520580286060480224065474769509041898566430165562388788876569931360622901138604794719903803514895382944191479053472839516730953267084886865629258228280183235306885684676780964583744959752135317555928974874114862675119976453496551564196789630093582016301597224228483492766809846018040334801537358667155446053926096746272053649911928567285021553830775582126264395678446078907519919817755129441492531649828385974776565907055494343687715692209490763415359771001154773494314872255785641354741685573952328555809579475816602841362334704071469714797341855950837456017039610175900170679490786928551621593896763536735589607072288341335139014309742749366357967148030073565826082526379412886691122321425261197892594")
const expect="6914762538096641475336952474665353896298532436792415712763835434685863906168249793998161538116837103073726072014896780826493121463947625429264563391729940369481126649719670683353910161259016399490133344376734814098410167930148116049910042028866168019903421348548420353160791791386015711713219402470288141128745271936785764639138107491619423215401315350696261684552527410254717989948856694899300519567563558422717266256504607001441306862408710066890417282076238115223282228240847528359994004108479135113505357228920641578097830280104194534195281447867428021889306357803789121397436990558557599408429069690452898606106567337457016527613681498025308437699296444772508423242348004172415536915855749062796024257033329594523158286304029662991721742922041678215392669370632503139280485022061901933359379719000029561622564718559407992304532316778145647437019453911776665052761209281578061902231167870676353223718592126848563711429430003753989231324659866932784178376591538201140652664267351272455337565697648784962249451046250692965685120627672935097934421291465022347780457972518407033982147823372094516767063632863011220084842648333679608289671360549469208564901324951935001154617580803889044104043156685135381483747558030901685647177840190271698837161158668611997675983326170505835345819565728535339982426621775801584668793030285327276698345150252854613087308972073827777118425278630900712102423447305777196199716596566764099683344009522426537932219143907054736015791150101626008026589347597833548835719214967914638664320317266528246854927240002086014605190854327163033563693010009089931878104802835415892909304376613662808122681594747053110583309673979842189142693765016767187762883636885016276292266678809376165228989074993598125597772659764083858050141716578939129565188711486005009244928787570302930112501860742906952223369318062007302426624975374057144695674068735445345146688658348348358626736648532077587089432698344369580504505092846720073429390773729545038016258515020450281435312794337953111235904265274286625108573838554514609193511745553706272816733746121575626412608481876209906931963039951670450599822673123438880485142025936450282313427557672991154904431834369531029771150629179265173281629108739221983691573767105298770745991530445002026838789034502958676030409346754182368810138272105133460184220138825320831681636038917369078947672000521410707163485089512370851191944545697296556192767137718862639561266783055737138874022346144662763304117614215248319686364704656896987036883004837936315922912706593410406291187228247183018179607578984974997990522171148656581898106173563163129755726169496378811938999068201307167532163361317985490049037295458583563998127439225517419258147621236018639945413845315630930796859096459872408992177351668113397367072173402422241983063236540181444248420243509476511861564099414753989137054245190826110356594299202376669692295338619411839093424240662834633488933437518669408654243826928550743509528895947039696453591765047188300995428873449668667989947061706901497110384715675665051886016744923435969850450566937540242861789257140250385762648163849368063585301012789695193048527758670365620363444394689633181233576170731744577626263678508989774759443485295377403767687404207675149753411573309900094065658234453856535232660004709110349561199899651181583746614477618687047966682905256599508914233029276405473986221405131866047473389147852474420359441023873518664774131351830258534658153988521789559909841286558167592383193489180038146342924219597309121852734114613315553015303044077811096598455766345418299126994520641910616691008224216826822175626996208347910059325722870322007485972438712951452058028606048022406547476950904189856643016556238878887656993136062290113860479471990380351489538294419147905347283951673095326708488686562925822828018323530688568467678096458374495975213531755592897487411486267511997645349655156419678963009358201630159722422848349276680984601804033480153735866715544605392609674627205364991192856728502155383077558212626439567844607890751991981775512944149253164982838597477656590705549434368771569220949076341535977100115477349431487225578564135474168557395232855580957947581660284136233470407146971479734185595083745601703961017590017067949078692855162159389676353673558960707228834133513901430974274936635796714803007356582608252637941288669112232142526119789259"

console.log(expect==result);
console.log(result);