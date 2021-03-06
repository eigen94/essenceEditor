$(function(){
//	json 데이터 값
	var essenceJsonData = {//["이해관계자","기회","요구사항","소프트웨어시스템","팀","작업","작업방식"]
//			1.이해관계자
			a1s1 : {name:'식별', checkList : makeNumberArr(1,3)},
			a1s2 : {name:'대표선출', checkList : makeNumberArr(4,7)},
			a1s3 : {name:'작업참여', checkList : makeNumberArr(8,10)},
			a1s4 : {name:'배포기준합의', checkList : makeNumberArr(11,15)},
			a1s5 : {name:'배포합의', checkList : makeNumberArr(16,17)},
			a1s6 : {name:'사용만족', checkList : makeNumberArr(18,19)},
//			2.기회
			a2s1 : {name:'기회식별', checkList : makeNumberArr(20,22)},
			a2s2 : {name:'솔루션 필요성 확인', checkList : makeNumberArr(23,27)},
			a2s3 : {name:'솔루션 가치 확인', checkList : makeNumberArr(28,32)},
			a2s4 : {name:'솔루션 타당성 검증', checkList : makeNumberArr(33,38)},
			a2s5 : {name:'솔루션 개발', checkList : makeNumberArr(39,41)},
			a2s6 : {name:'이익 발생', checkList : makeNumberArr(42,43)},
//			3.요구사항
			a3s1 : {name : '개념정의', checkList : makeNumberArr(44,47)},
			a3s2 : {name : '범위정의', checkList : makeNumberArr(48,46)},
			a3s3 : {name : '요건정의', checkList : makeNumberArr(57,65)},
			a3s4 : {name : '요건합의', checkList : makeNumberArr(66,70)},
			a3s5 : {name : '요건구현', checkList : makeNumberArr(71,74)},
			a3s6 : {name : '니즈충족', checkList : makeNumberArr(75,77)},
//			4.소프트웨어시스템
			a4s1 : {name : '아키텍처 선정', checkList : makeNumberArr(78,84)},
			a4s2 : {name : '아키텍처 검증', checkList : makeNumberArr(85,90)},
			a4s3 : {name : '사용가능', checkList : makeNumberArr(91,97)},
			a4s4 : {name : '배포준비', checkList : makeNumberArr(98,101)},
			a4s5 : {name : '운영', checkList : makeNumberArr(102,104)},
			a4s6 : {name : '운영 종료', checkList : makeNumberArr(105,108)},
//			5.팀
			a5s1 : {name : '팀요건 정의', checkList : makeNumberArr(109,119)},
			a5s2 : {name : '팀구성', checkList : makeNumberArr(120,129)},
			a5s3 : {name : '팀빌딩', checkList : makeNumberArr(130,133)},
			a5s4 : {name : '작업수행', checkList : makeNumberArr(134,138)},
			a5s5 : {name : '팀해산', checkList : makeNumberArr(139,141)},
//			6.작업
			a6s1 : {name : '과업확정', checkList : makeNumberArr(142,148)},
			a6s2 : {name : '사전준비 ', checkList : makeNumberArr(149,160)},
			a6s3 : {name : '작업시작', checkList : makeNumberArr(161,164)},
			a6s4 : {name : '작업진행', checkList : makeNumberArr(165,171)},
			a6s5 : {name : '목표달성', checkList : makeNumberArr(172,174)},
			a6s6 : {name : '작업종료', checkList : makeNumberArr(175,180)},
//			7.작업방식
			a7s1 : {name : '원칙 수립', checkList : makeNumberArr(181,186)},
			a7s2 : {name : '작업방식 확정', checkList : makeNumberArr(187,192)},
			a7s3 : {name : '시범적용', checkList : makeNumberArr(193,198)},
			a7s4 : {name : '전체적용', checkList : makeNumberArr(199,201)},
			a7s5 : {name : '작업방식 내재화', checkList : makeNumberArr(202,205)},
			a7s6 : {name : '사용종료', checkList : makeNumberArr(206,207)},
//			
//			체크리스트
//			
			1: {id:"c001", desc: '소프트웨어 시스템을 개발하거나 운영함으로써 영향을 받거나, 영향을 받게될 모든 이해관계자들이 식별된다.'},
			2: {id:"c002", desc: '대표해야할 이해관계자 그룹에 대한 합의가 된다. 최소한 시스템에 펀딩하고, 사용하고, 지원하고 유지할 이해관계자 그룹은 고려된다.'},
			3: {id:"c003", desc: '이해관계자 대표들의 책임이 정의된다.'},
			4: {id:"c004", desc: '이해관계자 대표들이 그들의 책임을 맡는 것에 동의한다.'},
			5: {id:"c005", desc: '이해관계자 대표들이 그들의 책임을 수행할 권한을 부여 받는다.'},
			6: {id:"c006", desc: '이해관계자 대표들간의 협업 방식이 합의된다.'},
			7: {id:"c007", desc: '이해관계자 대표들이 팀의 일하는 방식을 지원하고 존중한다.'},
			8: {id:"c008", desc: '이해관계자 대표들이 그들의 책임에 부합하게 팀을 돕는다.'},
			9: {id:"c009", desc: '이해관계자 대표들은 적절한 방법으로 의사결정에 참여하고 피드백을 제공한다.'},
			10: {id:"c010", desc: '이해관계자 대표들은 그들이 대표하는 그룹에 영향을 주는 변화에 대해 즉각적으로 의사소통한다.'},
			11: {id:"c011", desc: '이해관계자 대표들은 새로운 시스템의 다음 배포를 위한 최소한의 기대수준에 합의한다.'},
			12: {id:"c012", desc: '이해관계자 대표들은 작업에 참여하는 것에 만족한다.'},
			13: {id:"c013", desc: '이해관계자 대표들은 자신들의 인풋이 팀에 의해 평가받는것에 합의한다.'},
			14: {id:"c014", desc: '팀원들은 자신들의 인풋이 이해관계자 대표들에 의해 평가받는것에 합의한다.'},
			15: {id:"c015", desc: '이해관계자 대표들은 서로 다른 우선 순위와 관점들을 팀의 명확한 방향성을 제시하기 위해 균형을 맞추는 방안에 합의한다.'},
			16: {id:"c016", desc: '이해관계자 대표들은 시스템에 대해 본인들이 대표하는 그룹의 관점으로 피드백을 제공한다.'},
			17: {id:"c017", desc: '이해관계자 대표들은 시스템이 배포 준비가 되었다고 합의한 것을 확인한다.'},
			18: {id:"c018", desc: '이해관계자들이 새로운 시스템을 사용하고 그들의 경험에 대한 피드백을 제공한다.'},
			19: {id:"c019", desc: '이해관계자들이 새로운 시스템이 그들의 기대 수준에 부합한다고 확인한다.'},
			20: {id:"c020", desc: '작업방식에 대한 개선 방안, 시장 점유율 향상 방안, 신규 혹은 향상된 소프트웨어 시스템 적용 등을 위한 아이디어가 식별된다.'},
			21: {id:"c021", desc: '최소한 한명 이상의 이해관계자가 소개된 아이디어와 관련된 기회와 그 가치에 대해 더 알기 위해 투자 하기를 원한다.'},
			22: {id:"c022", desc: '그 기회를 공유할 다른 이해관계자들이 식별된다.'},
			23: {id:"c023", desc: '기회 및 제안 솔루션에 관련된 이해관계자들이 식별된다.'},
			24: {id:"c024", desc: '기회를 생성할 이해관계자들의 니즈가 인정된다.'},
			25: {id:"c025", desc: '근본적인 문제와 근본 원인들이 식별된다.'},
			26: {id:"c026", desc: '소프트웨어 기반의 솔루션이 필요하다는 것이 확인된다.'},
			27: {id:"c027", desc: '적어도 한 개의 소프트웨어 기반의 솔루션이 제안된다.'},
			28: {id:"c028", desc: '기회를 해결함으로써 얻는 가치가 절대적 기준, 이익 창출 기준 혹은 기간 대비 절약 기준 등 관점에서 양으로 측정이 된다.'},
			29: {id:"c029", desc: '이해관계자들에게 미치는 솔루션의 영향이 인지된다.'},
			30: {id:"c030", desc: '자금을 제공하고, 소프트웨어 시스템을 이용하는 이해관계자들에게 소프트웨어 시스템이 주는 가치가 인정된다.'},
			31: {id:"c031", desc: '소프트웨어 시스템의 개발을 평가할 성공 기준이 명확해진다.'},
			32: {id:"c032", desc: '솔루션에 요구되는 바람직한 결과물이 명확해지고 정량화된다..'},
			33: {id:"c033", desc: '솔루션의 윤곽이 잡힌다.'},
			34: {id:"c034", desc: '솔루션이 일정 제약 조건 내에서 개발 가능하고 배포 가능하다는 징후가 보인다.'},
			35: {id:"c035", desc: '솔루션과 관계된 위험이 수용가능하고 관리 가능하다.'},
			36: {id:"c036", desc: '솔루션의 (예산 안에 있는) 직접적인 비용이 기회로 부터 창출이 예상되는 가치보다 적다.'},
			37: {id:"c037", desc: '소프트웨어 기반 솔루션 개발에 대한 이유를 팀원들이 이해한다.'},
			38: {id:"c038", desc: '기회를 추구함이 실행 가능하다는 것이 명확하다.'},
			39: {id:"c039", desc: '기회를 명확히 해결해 주는 시스템이 사용 가능하다.'},
			40: {id:"c040", desc: '이해관계자들은 사용 가능한 솔루션이 배포할 가치가 있음에 대해 합의한다.'},
			41: {id:"c041", desc: '이해관계자들은 솔루션이 기회를 해결하는데 대해 만족한다.'},
			42: {id:"c042", desc: '이해관계자들을 위한 이익이 창출되도록 솔루션을 사용하기 시작한다.'},
			43: {id:"c043", desc: '투자 수익률은 적어도 예상했던 것 만큼은 좋다.'},
			44: {id:"c044", desc: '초기의 이해관계자들이 시스템 개발에 합의한다.'},
			45: {id:"c045", desc: '새로운 시스템을 사용할 이해관계자들이 식별된다.'},
			46: {id:"c046", desc: '새로운 시스템의 초기 작업에 펀딩할 이해관계자가 식별된다.'},
			47: {id:"c047", desc: '새로운 시스템의 도입으로 해결되는 기회가 명확하다.'},
			48: {id:"c048", desc: '새로운 시스템 개발에 참여하는 이해관계자들이 식별된다.'},
			49: {id:"c049", desc: '이해관계자들은 새로운 시스템의 목적에 대해 합의한다.'},
			50: {id:"c050", desc: '새로운 시스템에 대한 성공이 무엇인지 명확하다.'},
			51: {id:"c051", desc: '이해관계자들은 제안된 솔루션의 범위에 대해 공감한다.'},
			52: {id:"c052", desc: '요구사항을 설명하는 방식이 합의된다.'},
			53: {id:"c053", desc: '요구사항을 관리하는 메커니즘이 준비되어 있다.'},
			54: {id:"c054", desc: '우선순위 스키마가 명확하다.'},
			55: {id:"c055", desc: '제약 사항이 식별되고 고려되어 진다.'},
			56: {id:"c056", desc: '가정이 명시된다.'},
			57: {id:"c057", desc: '요구사항들이 수집되고 팀과 이해관계자들에게 공유 된다.'},
			58: {id:"c058", desc: '요구사항들의 원천이 명확하다.'},
			59: {id:"c059", desc: '요구사항들의 근거가 명확하다.'},
			60: {id:"c060", desc: '상충되는 요구사항들이 식별되고 처리된다.'},
			61: {id:"c061", desc: '요구사항들이 개발해야할 시스템의 본질적인 특성을 설명해준다.'},
			62: {id:"c062", desc: '시스템의 중요한 사용 시나리오 대부분이 설명될 수 있다.'},
			63: {id:"c063", desc: '요구사항들의 우선순위가 명확하다.'},
			64: {id:"c064", desc: '요구사항들에 대한 구현 영향도가 이해되어 진다.'},
			65: {id:"c065", desc: '팀은 무엇이 개발되어야 하는 지를 이해하고 그것을 개발하는 것에 대해 합의한다.'},
			66: {id:"c066", desc: '이해 관계자들은 요구사항들이 수용 가능한 솔루션을 묘사하고 있다는데 동의한다.'},
			67: {id:"c067", desc: '합의된 요구사항들에 대한 변경률이 상대적으로 낮고 관리 가능하다.'},
			68: {id:"c068", desc: '요구사항들을 구현함으로써 제공되는 가치가 명확하다.'},
			69: {id:"c069", desc: '요구사항들에 의해 만족되어지는 기회의 범위가 명확하다.'},
			70: {id:"c070", desc: '요구사항들은 테스트가 가능하다.'},
			71: {id:"c071", desc: '이해관계자들이 목표 시스템을 위한 충분한 요구사항이 구현되었다는 것을 수용한다.'},
			72: {id:"c072", desc: '이해관계자들이 시스템이 무엇을 하고 무엇을 하지 말아야 할지 정확하게 반영하고 있는 요구사항들을 수용한다.'},
			73: {id:"c073", desc: '구현된 요구사항 아이템 세트가 이해관계자들에게 명확한 가치를 제공한다.'},
			74: {id:"c074", desc: '이해관계자들이 요구사항들을 구현한 시스템이 운영할 만한 가치가 있다는 것을 수용한다.'},
			75: {id:"c075", desc: '새로운 시스템을 위한 니즈를 모두 만족 시키기 위해 그들에 어떤 것이 필요한지 정확하게 요구사항들을 포착했다는데 대해 이해관계자들이 수용한다.'},
			76: {id:"c076", desc: '요구사항들이 완전히 만족된다는 것을 부인할 만한 주요한 요구사항이 남아 있지 않다.'},
			77: {id:"c077", desc: '시스템이 요구사항들을 모두 만족시킨다고 이해관계자들이 수용한다.'},
			78: {id:"c078", desc: '아키텍처를 선택 시 사용할 기준에 합의한다.'},
			79: {id:"c079", desc: '하드웨어 플랫폼이 확인된다.'},
			80: {id:"c080", desc: '프로그래밍 언어 및 기술이 선택된다.'},
			81: {id:"c081", desc: '시스템 바운더리가 공지된다.'},
			82: {id:"c082", desc: '시스템 구성에 대한 주요한 의사결정이 이루어진다.'},
			83: {id:"c083", desc: '구매, 개발과 재사용에 대한 의사결정이 이루어진다.'},
			84: {id:"c084", desc: '주요 기술 위험이 합의된다.'},
			85: {id:"c085", desc: '주요 아키텍처 특성들이 입증된다.'},
			86: {id:"c086", desc: '시스템이 실행 가능하고 그 성능이 측정될 수 있다.'},
			87: {id:"c087", desc: '주요한 하드웨어 컨피그레이션이 입증된다.'},
			88: {id:"c088", desc: '주요한 인터페이스가 입증된다.'},
			89: {id:"c089", desc: '기존 시스템들과의 통합이 입증된다.'},
			90: {id:"c090", desc: '관련된 이해관계자들이 입증된 아키텍처가 적당하다고 합의한다.'},
			91: {id:"c091", desc: '시스템이 그것을 사용할 이해관계자들에 의해 운영 가능하다.'},
			92: {id:"c092", desc: '시스템이 제공하는 기능들은 테스트 되었다.'},
			93: {id:"c093", desc: '이해관계자들이 시스템의 성능을 수용한다.'},
			94: {id:"c094", desc: '이해관계자들이 결함 레벨을 수용한다.'},
			95: {id:"c095", desc: '시스템에 대해 모든 문서화가 완료된다.'},
			96: {id:"c096", desc: '출시되는 컨텐츠가 공지된다.'},
			97: {id:"c097", desc: '시스템이 제공하는 부가적인 가치가 명확하다.'},
			98: {id:"c098", desc: '설치 관련 문서 및 기타 사용자 문서가 준비된다.'},
			99: {id:"c099", desc: '이해관계자 대표들은 시스템이 목적에 부합한다는 것을 수용한다.'},
			100: {id:"c100", desc: '이해관계자 대표들은 시스템이 가동되는 것을 바란다.'},
			101: {id:"c101", desc: '운영을 위한 지원이 준비된다.'},
			102: {id:"c102", desc: '시스템을 사용하기로한 이해관계자들에게 해당 시스템이 제공된다.'},
			103: {id:"c103", desc: '적어도 시스템의 한 개 사용 예가 완전히 작동한다.'},
			104: {id:"c104", desc: '시스템이 서비스 레벨에 부합할 수 있도록 완전히 지원된다.'},
			105: {id:"c105", desc: '시스템이 교체되거나 사용 중단된다.'},
			106: {id:"c106", desc: '시스템을 더 이상 지원하지 않는다.'},
			107: {id:"c107", desc: '시스템을 더 이상 사용하는 "공식적인" 이해관계자가 없다.'},
			108: {id:"c108", desc: '시스템 업데이트가 더 이상 지원되지 않는다.'},
			109: {id:"c109", desc: '기회 및 결과 관점으로 팀의 미션이 정의된다.'},
			110: {id:"c110", desc: '팀 운영의 제약 사항이 공지된다.'},
			111: {id:"c111", desc: '팀을 성장시킬 메커니즘이 준비된다.'},
			112: {id:"c112", desc: '팀의 구성요소가 정의된다.'},
			113: {id:"c113", desc: '작업을 어디서, 어떻게 수행할 것인지에 대한 제약 사항들이 정의된다.'},
			114: {id:"c114", desc: '팀의 책임들이 설명된다.'},
			115: {id:"c115", desc: '팀의 책무 레벨이 명확하다.'},
			116: {id:"c116", desc: '필요한 역량이 확인된다.'},
			117: {id:"c117", desc: '팀의 크기가 결정된다.'},
			118: {id:"c118", desc: '거버넌스 룰이 정의된다.'},
			119: {id:"c119", desc: '리더십 모델이 선정된다.'},
			120: {id:"c120", desc: '개개인의 책임이 인지된다.'},
			121: {id:"c121", desc: '작업 진행이 가능할 수 있을 만큼 충분한 팀원이 채용된다.'},
			122: {id:"c122", desc: '각각의 팀원은 팀이 어떻게 조직되며 각 개인의 역할이 무엇인지 이해한다.'},
			123: {id:"c123", desc: '모든 팀원은 작업을 어떻게 수행할 지 이해한다.'},
			124: {id:"c124", desc: '팀의 멤버들이 서로 만나고 (아마도 가상으로) 서로를 알아가기 시작한다.'},
			125: {id:"c125", desc: '팀원들이 그들의 책임을 이해하고, 그들의 능력을 어떻게 조화롭게 균형을 맞출지 이해한다.'},
			126: {id:"c126", desc: '팀원들은 작업을 수용한다.'},
			127: {id:"c127", desc: '외부 협업자들(조직, 팀 그리고 개인)이 식별된다.'},
			128: {id:"c128", desc: '팀의 커뮤니케이션 메커니즘이 정의된다.'},
			129: {id:"c129", desc: '각 팀원은 정의된대로 팀의 작업을 수행한다.'},
			130: {id:"c130", desc: '팀은 하나의 유기적 단위로 작업을 한다.'},
			131: {id:"c131", desc: '의사소통은 열려 있으며 정직하다.'},
			132: {id:"c132", desc: '팀은 팀의 미션 달성에 집중한다.'},
			133: {id:"c133", desc: '팀원들은 서로에 대해 잘 안다.'},
			134: {id:"c134", desc: '팀은 팀의 책무를 일관되게 준수한다.'},
			135: {id:"c135", desc: '팀은 변화하는 상황에 지속적으로 적응한다.'},
			136: {id:"c136", desc: '팀은 외부의 도움 없이 문제를 식별하고 해결한다.'},
			137: {id:"c137", desc: '백 트레킹과 재작업을 최소화하며 효과적으로 일을 진행시킨다.'},
			138: {id:"c138", desc: '낭비 작업과 향후 낭비가 될 잠재적 작업들을 지속적으로 제거해나간다.'},
			139: {id:"c139", desc: '팀의 책임이 완료되거나 다른 곳에 넘겨진다.'},
			140: {id:"c140", desc: '팀의 멤버들이 다른 팀에 할당될 수 있다.'},
			141: {id:"c141", desc: '미션을 완성하기 위해 더 이상 팀의 노력이 필요하지 않다.'},
			142: {id:"c142", desc: '착수되는 작업에 요구되는 결과가 명확하다.'},
			143: {id:"c143", desc: '작업 수행의 제약 사항들이 명확히 식별된다.'},
			144: {id:"c144", desc: '자금을 제공할 이해관계자들이 확인된다.'},
			145: {id:"c145", desc: '작업 개시자가 명확하게 공지된다.'},
			146: {id:"c146", desc: '결과를 수용할 이해관계자가 확인된다.'},
			147: {id:"c147", desc: '자금의 원천이 명확하다.'},
			148: {id:"c148", desc: '작업 우선순위가 명확하다.'},
			149: {id:"c149", desc: '책무가 확정된다.'},
			150: {id:"c150", desc: '작업의 비용과 노력(일의 강도)이 추정된다.'},
			151: {id:"c151", desc: '사용 가능한 자원이 확인된다.'},
			152: {id:"c152", desc: '거버넌스 정책과 절차가 명확하다.'},
			153: {id:"c153", desc: '노출되는 위험이 확인된다.'},
			154: {id:"c154", desc: '인수 기준이 정의되고 고객에 의해 합의된다.'},
			155: {id:"c155", desc: '일을 생산적으로 수행하기 충분할 만큼의 크기로 작업이 세분화된다.'},
			156: {id:"c156", desc: '팀과 이해관계자들이 타스크를 식별하고 우선순위를 정한다.'},
			157: {id:"c157", desc: '신뢰할 수 있는 계획이 준비된다.'},
			158: {id:"c158", desc: '작업을 시작하기 위한 펀딩이 준비된다.'},
			159: {id:"c159", desc: '팀 또는 적어도 팀원들 중 일부가 작업을 시작할 수 있도록 준비가 되어 있다.'},
			160: {id:"c160", desc: '통합 및 전달 시점이 정의된다.'},
			161: {id:"c161", desc: '개발 작업이 시작된다.'},
			162: {id:"c162", desc: '작업 진행이 모니터링 된다.'},
			163: {id:"c163", desc: '작업이 작업 완료에 대한 명확한 정의와 함께 수행 가능한 항목으로 상세화된다.'},
			164: {id:"c164", desc: '팀원들은 작업 항목을 수용하고 타스크를 수행한다.'},
			165: {id:"c165", desc: '타스크가 완료된다.'},
			166: {id:"c166", desc: '계획되지 않은 일은 통제된다.'},
			167: {id:"c167", desc: '위험이 발생하거나 발생될 개연성은 수용할 수 있는 수준으로 감소되어 있어 위험이 그 영향도 측면으로 통제된다.'},
			168: {id:"c168", desc: '팀의 성과 반영을 위해 측정 척도가 수정된다.'},
			169: {id:"c169", desc: '작업 진행과 속도를 보여주기 위한 측정이 가능하다.'},
			170: {id:"c170", desc: '재작업은 통제 된다.'},
			171: {id:"c171", desc: '타스크는 예상한대로 일관성 있게 제시간에 완료된다.'},
			172: {id:"c172", desc: '남아 있는 모든 타스크들은 행정적인 관리이거나 다음 작업 준비와 관련된 것이다. (즉, 행정적인 관리 업무 및 다음 작업 준비 업무를 제외하고는 모두 타스크가 완료되었다).'},
			173: {id:"c173", desc: '작업 결과가 달성 된다.'},
			174: {id:"c174", desc: '이해관계자(들)이 소프트웨어 시스템의 결과를 수용한다.'},
			175: {id:"c175", desc: '교훈이 아이템화되고 기록되고 토의된다.'},
			176: {id:"c176", desc: '측정 방법이 사용가능하다.'},
			177: {id:"c177", desc: '관련된 모든 문서들을 저장한다.'},
			178: {id:"c178", desc: '예산 결산을 하고 예산이 회수된다.'},
			179: {id:"c179", desc: '팀이 해산된다.'},
			180: {id:"c180", desc: '더 이상 남아 있거나 완성되지 못한 타스크는 존재하지 않는다.'},
			181: {id:"c181", desc: '팀에 의해 원칙과 제약 사항이 수립된다.'},
			182: {id:"c182", desc: '이해관계자들이 원칙과 제약 사항을 합의한다.'},
			183: {id:"c183", desc: '작업을 위해 필요한 툴과 그와 관련된 이해관계자들이 합의된다.'},
			184: {id:"c184", desc: '수행 방안에 대한 추천이 유효하다.'},
			185: {id:"c185", desc: '팀의 작업 환경이 확인된다.'},
			186: {id:"c186", desc: '프렉티스와 툴에 대한 선택, 구매 및 사용에 적용할 제약조건이 공지된다.'},
			187: {id:"c187", desc: '작업방식의 기초를 이룰 주요한 프랙티스 및 툴이 선택된다.'},
			188: {id:"c188", desc: '작업을 시작하기 위한 충분한 프랙티스가 팀에 의해 합의된다.'},
			189: {id:"c189", desc: '협상이 안되는 모든 프랙티스와 툴들이 식별된다.'},
			190: {id:"c190", desc: '사용 가능한 프랙티스와 툴들이 분석되고,  둘 간에 존재하는 갭이 분석되고 인지된다.'},
			191: {id:"c191", desc: '원하는 작업방식을 수행하기 위해 필요한 능력과 실제 팀의 능력 수준의 갭이 분석되고 인지된다.'},
			192: {id:"c192", desc: '선택한 프랙티스와 툴들을 사용 가능한 작업방식 수립을 위해 통합한다.'},
			193: {id:"c193", desc: '프랙티스와 툴들이 실제 작업을 수행을 위해 사용되고 있다.'},
			194: {id:"c194", desc: '선택된 툴과 프랙티스의 사용이 정기적으로 점검되고 있다.'},
			195: {id:"c195", desc: '프랙티스와 툴들을 팀의 상황에 맞도록 적응시키고 있다.'},
			196: {id:"c196", desc: '팀이 프랙티스와 툴의 사용을 지원한다.'},
			197: {id:"c197", desc: '팀의 작업방식에 대한 피드백을 처리할 수 있는 절차가 준비되어 있다.'},
			198: {id:"c198", desc: '프랙티스와 툴들은 팀의 커뮤니케이션과 협업을 지원한다.'},
			199: {id:"c199", desc: '팀 전체가 작업 수행을 위해서 프랙티스와 툴들을 사용하고 있다.'},
			200: {id:"c200", desc: '모든 팀의 멤버가 작업 수행을 위해 필요한 프랙티스와 툴들에 접근한다.'},
			201: {id:"c201", desc: '팀 전체가 작업방식의 검사 및 채택에 관여한다.'},
			202: {id:"c202", desc: '팀원들은 계획한 대로 자신들의 현재 상황에 맞도록 작업방식을 사용하고 적용해 나가고 있다.'},
			203: {id:"c203", desc: '팀은 별다른 생각 없이도 프랙티스를 자연스럽게 적용한다.'},
			204: {id:"c204", desc: '툴이 자연스럽게 팀이 일하는 방식을 지원한다.'},
			205: {id:"c205", desc: '팀이 지속적으로 프랙티스와 툴의 사용을 조율한다.'},
			206: {id:"c206", desc: '팀의 작업방식이 더 이상 사용되지 않는다.'},
			207: {id:"c207", desc: '교훈이 미래의 사용을 위해 공유된다.'}
	}
	
//	
//	
//	
//	기본객체 선언
	function essenceObj(){
		this.name;
		this.milestone=[];
	}
	function milestoneObj(hashID){
		this.hashID=hashID;
		this.name;
		this.rowNum;
		this.alphaState=[];
		this.Activity;
	}
	function alphaStateObj(hashID,id,name,checklist){
		this.hashID=hashID;
		this.id=id;
		this.name=name;
		this.checklist=checklist;
		this.toggle=false;
		this.progress;
		this.maturity;
	}
	function checkListObj(hashID,id,desc){
		this.hashID=hashID;
		this.id=id;
		this.desc=desc;
		this.state=0;
	}
	
//	프로토타입
	essenceObj.prototype.removeMilestone=function(hashID){
		var essenceObj = this;
		var milestoneArr = essenceObj.milestone;
		for(var i=0;i<milestoneArr.length;i++){
			if(milestoneArr[i].hashID===hashID){
				milestoneArr.splice(i, 1);
			}
		}
	}
	
	essenceObj.prototype.changeMilestoneName=function(hashID,name){
		// console.log(hashID+" "+name)
		var essenceObj = this;
		var milestoneArr = essenceObj.milestone;
		for(var i=0;i<milestoneArr.length;i++){
			// console.log(i);
			if(milestoneArr[i].hashID===hashID){
				// console.log("find");
				this.milestone[i].name=name;
			}
		}
	}
	essenceObj.prototype.changeMilestoneActivity=function(hashID,Activity){
		// console.log(hashID+" "+Activity)
		var essenceObj = this;
		var milestoneArr = essenceObj.milestone;
		for(var i=0;i<milestoneArr.length;i++){
			// console.log(i);
			if(milestoneArr[i].hashID===hashID){
				// console.log("find");
				this.milestone[i].Activity=Activity;
			}
		}
	}
	
	essenceObj.prototype.addAlphaState=function(milestoneHashID,alphaStateObj,index){
//		console.log(index);
		var essenceObj = this;
		var milestoneArr = essenceObj.milestone;
		for(var i=0;i<milestoneArr.length;i++){
			if(milestoneArr[i].hashID===milestoneHashID){
				if(index==undefined){
					milestoneArr[i].alphaState.push(alphaStateObj);
				} else {
					milestoneArr[i].alphaState.splice(index,0,alphaStateObj);
				}
			}
		}
	}
	
	essenceObj.prototype.moveAlphaState=function(alphastoneHashID,targetMilestoneHashID,index){
		var essenceObj = this;
		var alphaStateObj;
		var milestoneArr = essenceObj.milestone;
		for(var i=0;i<milestoneArr.length;i++){
			for(var j=0;j<milestoneArr[i].alphaState.length;j++){
				if(milestoneArr[i].alphaState[j].hashID===alphastoneHashID){
					alphaStateObj = milestoneArr[i].alphaState[j];
//					console.log(milestoneArr[i].alphaState);
					milestoneArr[i].alphaState.splice(j,1);//찾은 객체를 삭제
					essenceObj.addAlphaState(targetMilestoneHashID, alphaStateObj,index);
//					console.log(milestoneArr[i].alphaState);
				}
				
			}
		}
	}
	
	essenceObj.prototype.findAlphaState=function(alphastoneHashID){
		var essenceObj = this;
		var milestoneArr = essenceObj.milestone;
		for(var i=0;i<milestoneArr.length;i++){
			for(var j=0;j<milestoneArr[i].alphaState.length;j++){
				if(milestoneArr[i].alphaState[j].hashID===alphastoneHashID){
					return 1;
				}
				
			}
		}
		return 0;
	}
	essenceObj.prototype.removeAlphaState=function(alphastoneHashID){
		var essenceObj = this;
		var milestoneArr = essenceObj.milestone;
		for(var i=0;i<milestoneArr.length;i++){
			for(var j=0;j<milestoneArr[i].alphaState.length;j++){
				if(milestoneArr[i].alphaState[j].hashID===alphastoneHashID){
					milestoneArr[i].alphaState.splice(j, 1);
				}
				
			}
		}
	}
	essenceObj.prototype.toggleAlphaState=function(alphastoneHashID){
		var essenceObj = this;
		var milestoneArr = essenceObj.milestone;
		for(var i=0;i<milestoneArr.length;i++){
			for(var j=0;j<milestoneArr[i].alphaState.length;j++){
//				console.log(milestoneArr[i].alphaState[j].hashID);
//				console.log(alphastoneHashID);
				if(milestoneArr[i].alphaState[j].hashID==alphastoneHashID.replace("#","")){
//					console.log(milestoneArr[i].alphaState[j].toggle)
					if(milestoneArr[i].alphaState[j].toggle==true){
						this.milestone[i].alphaState[j].toggle = false;
					} else {
						this.milestone[i].alphaState[j].toggle = true;
					}
				}
				
			}
		}
	}
	essenceObj.prototype.size=function(){
//		console.log(this["milestone"].length);
		return this["milestone"].length;
	}
	//초기에 서버에서 받아온 객체->뷰 로딩시 html로 변환 과정
	essenceObj.prototype.makeHtmlFromObj = function(obj){
		//html 코드 작성
		//마일스톤을 하나씩 불러와서 생성
		//하나의 마일스톤을 만들때 내부의 객체들도 생성
		var milestoneArr = obj.milestone;
//		milestoneArr=this.milestone;
//		if(obj==undefined){
//		}
		for(var i=0;i<milestoneArr.length;i++){
			this.milestone.push(milestoneArr[i]);
//			if(obj!=undefined){
//			}
			var hashID = milestoneArr[i].hashID;
			$('.essenceField').append(createMilestoneHtml(hashID,"true",milestoneArr[i].name,milestoneArr[i].Activity));
			for(var j=0;j<milestoneArr[i].alphaState.length;j++){
				var alphaStateObj = milestoneArr[i].alphaState[j];
				var appendNumber = alphaStateObj.id.substr(1,1);
				$('.milestoneObj .sortable'+appendNumber).eq(i).append(createAlphaHtml(alphaStateObj));
				if(alphaStateObj.toggle){
			    	var icon = $("#"+alphaStateObj.hashID+" .portlet-toggle");
			        icon.toggleClass( "ui-icon-plusthick ui-icon-minusthick" );
			        icon.closest( ".portlet" ).find( ".portlet-content" ).toggle();
				}
			}
			addClassSortable($('.sortable1'));
			addClassSortable($('.sortable2'));
			addClassSortable($('.sortable3'));
			addClassSortable($('.sortable4'));
			addClassSortable($('.sortable5'));
			addClassSortable($('.sortable6'));
			addClassSortable($('.sortable7'));
		}
		
	}
	
	essenceObj.prototype.changeAlphastateIndex=function(alphastateHashId,index){
		
	}
	essenceObj.prototype.convertObjToJson=function(){
		console.log(this);
		var jsonObj = JSON.stringify(this);
		return jsonObj;
	}
	essenceObj.prototype.convertJsonToObj=function(data){
		var obj = jQuery.parseJSON(data);
		console.log(obj);
		return obj;
	}
	
	function makeNumberArr(startNum,endNum){
		var returnValue = [];
		for(var i=startNum;i<=endNum;i++){
			returnValue.push(i);
		}
		return returnValue;
	}

	
	var addHashSaltCnt=0;
	function createHashID(){
		addHashSaltCnt+=1;
		this.date = new Date();
		this.time = date.getTime().toString();
		this.day = date.getDate().toString();
		this.month = date.getMonth().toString();
		this.year = date.getFullYear().toString();
		this.value = year+month+day+time+addHashSaltCnt;
		this.hashID = md5(value);
		return hashID;
	}
//////////////////////////////////////////////////////////
//	
//	HTML요소 생성	
//	
//////////////////////////////////////////////////////////
	function makeListHtml(){//리스트 html제작
		this.makeListHtmlArr = [6,6,6,6,5,6,6];
		this.makeListHtmlIdValue = ['dropdown-stakeholder','dropdown-opportunity','dropdown-requirement','component-softwareSystem','dropdown-team','dropdown-work','dropdown-wayofworking'];
		this.makeListHtmlIcon = ["icon fa fa-desktop",'icon fa fa-table','icon fa fa-file-text-o','icon fa fa-cubes','icon fa fa-slack','icon fa fa-archive','icon fa fa-archive']
		this.makeListHtmlAlpha = ["이해관계자","기회","요구사항","소프트웨어시스템","팀","작업","작업방식"]
		
		this.returnHtmlValue ='<th><button type="button" class="btn btn-info addMilestoneBtn">+</button></th>';
//		this.returnHtmlValue +='<ul class="pure-menu-list alphaSource">';
		
		for(var i=1;i<=7;i++){
			this.returnHtmlValue += '<th>';
			this.returnHtmlValue += '<li class="pure-menu-item pure-menu-has-children pure-menu-allow-hover">';
			this.returnHtmlValue += '<a class="pure-menu-link" href="#">';
			this.returnHtmlValue += this.makeListHtmlAlpha[i-1];
			this.returnHtmlValue += '</a>';
//			this.returnHtmlValue += '<ul class="">';
			this.returnHtmlValue += '<ul class="pure-menu-children">';
			this.returnHtmlValue += '';
			for(var j=1;j<=this.makeListHtmlArr[i-1];j++){
				var keyValue = 'a'+(i)+'s'+j;
				var jsonData = essenceJsonData[keyValue];
				this.returnHtmlValue += '<li value="'+keyValue+'" class="pure-menu-item alphaLists"><a class="pure-menu-link" href="">'+j+' '+jsonData.name+'</a></li>';
			}
			this.returnHtmlValue += '</ul>';
			this.returnHtmlValue += '</li>';
			this.returnHtmlValue += '</th>';
			
		}
		//할일 
		this.returnHtmlValue +='<th><div class="pure-menu-link">할일</div></th>';
		
		
		return this.returnHtmlValue;
	}
	function createMilestoneHtml(hashID,load,name,todoList){
		this.milestoneID = createHashID(); //md5이용한 hashID생성
		// console.log(name);
		var milestoneName;
		if(todoList==undefined){
			todoList="";
		}
		if(name==undefined){
			milestoneName="";
		} else {
			milestoneName = name;
		}
		if(hashID!=undefined){
			milestoneID = hashID;
		}
		tmpSaveMilestoneHashID=milestoneID
		if(load==undefined){
			defaultEssenceObj.milestone.push(new milestoneObj(milestoneID));//객체 생성
		}
		this.returnHtml = '<tr class="milestoneObj" id="'+milestoneID+'">'+
			'<td>'+
			'<input class="milestoneName" type="text" value="'+milestoneName+'">'+
			'<button class="removeMilestoneBtn">-</button>'+
			'</td>'+
			'<td>'+
			'<ul class="sortable1"></ul>'+
			'</td>'+
			'<td>'+
			'<ul class="sortable2"></ul>'+
			'</td>'+
			'<td>'+
			'<ul class="sortable3"></ul>'+
			'</td>'+
			'<td>'+
			'<ul class="sortable4"></ul>'+
			'</td>'+
			'<td>'+
			'<ul class="sortable5"></ul>'+
			'</td>'+
			'<td>'+
			'<ul class="sortable6"></ul>'+
			'</td>'+
			'<td>'+
			'<ul class="sortable7"></ul>'+
			'</td>'+
			'<td>'+
			'<textarea class="dotoList">'+todoList+'</textarea>'+
			'</td>'+
			'</tr>';
		return this.returnHtml;
	} 
	
	function createAlphaHtml(obj){
//		console.log(obj)
		var checklist = obj.checklist;
		this.returnHtml='<li id="'+obj.hashID+'" class="ui-state-default">';
//		this.returnHtml='<li id="'+obj.hashID+'" class="ui-state-default" style="height:auto;">';
		this.returnHtml +='<div class="portlet ui-widget ui-widget-content ui-helper-clearfix ui-corner-all">';
		this.returnHtml +='<div class="portlet-header ui-widget-header ui-corner-all">';
		this.returnHtml +='<span class="ui-icon ui-icon-plusthick portlet-toggle"></span><span class="ui-icon ui-icon-close"></span>'+(obj.id).substr(3,1)+'. ';
		this.returnHtml += obj.name;
		this.returnHtml +='</div>';
		this.returnHtml +='<div class="portlet-content">';
//		this.returnHtml += '<button class="checklistToggleBtn">#</button><br><div class="checklistDesc">';
		for(var i=0;i<checklist.length;i++){
			this.returnHtml += '<div id="'+checklist[i].hashID+'"class="checklists">'+(i+1)+" "+checklist[i].desc+'<br><br>';
		}
		this.returnHtml += '</div>';
		this.returnHtml +='</div>';
		this.returnHtml += '</li>';
		
		return this.returnHtml;
	}
	
	function createChecklistHtml(obj){
		var milestoneLength=obj.milestone.length;
		// console.log(obj);
		var nameArr = ["이해관계자","기회","요구사항","소프트웨어시스템","팀","작업","작업방식"];
		this.returnHtml="";
		for(var i=0;i<milestoneLength;i++){
			for(var j=0;j<obj.milestone[i].alphaState.length;j++){
				for(var k=0;k<obj.milestone[i].alphaState[j].checklist.length;k++){
//					console.log(obj.milestone[i].alphaState[j].checklist);
					var milestoneName;
					if(obj.milestone[i].name==undefined){
						milestoneName="";
					}
					
					this.returnHtml+='<tr class="lists">';
					this.returnHtml+='<td>'+milestoneName+'</td>';
//					console.log();
					this.returnHtml+='<td>'+nameArr[obj.milestone[i].alphaState[j].id.substr(1,1)-1]+'</td>';
					this.returnHtml+='<td>'+obj.milestone[i].alphaState[j].name+'</td>';
					this.returnHtml+='<td>'+obj.milestone[i].alphaState[j].checklist[k].desc+'</td>';
					this.returnHtml+='<td><select><option>0</option><option>1</option><option>2</option><option>3</option><option>4</option><option>5</option></select></td></tr>';
					
				}
			}
		}
		return this.returnHtml;
		
	}
	

//	에센스객체생성
	var defaultEssenceObj = new essenceObj();
//	console.log(defaultEssenceObj);
	
	//시작했을때 사이즈를 측정해서 전송받을지 결정하는 부분
//	console.log(defaultEssenceObj.size())
//	console.log('loadEssenceObj')
	if(defaultEssenceObj.size()==0){
		// console.log('loadEssenceObj')
		socket.emit('loadEssenceObj');
	}
	
//	가장 마지막에 이동시킨 객체를 임시로 담아두는 변수. 
	var tmpSaveMoveObj;
//	옮길때 옮기는 알파상태 아이디를 임시로 담아두는 변수.
	var tmpSaveMoveAlphaStateHashID;
//	마일스톤 해시아이디값의 임시변수
	var tmpSaveMilestoneHashID;
	var tmpSaveMilestoneHashID2;
//	drag 후 멈췄을때 milestone들을 스캔해서, 이동시킨 알파스테이트와 동일한 id를 가진 마일스톤을 찾은 후, 객체에 추가해준다.
	function reflashMilestone(tmpSaveMoveObj){
		var objHashID = tmpSaveMoveObj.hashID;
		var returnvalue = -1;
		$('.milestoneObj').each(function(index){
			var milestoneObjHashID = $(this).attr('id');
			var liArr = $(this).find('li');
			for(var i=0;i<liArr.length;i++){
				if($(liArr[i]).attr('id')==objHashID){
					defaultEssenceObj.addAlphaState(milestoneObjHashID, tmpSaveMoveObj);
					tmpSaveMilestoneHashID2 = milestoneObjHashID;
					returnvalue = 1;
				}
			}
		});
		return returnvalue;
	}
	
//	마일스톤에 올라간 알파상태를 옮겼을 때 프로토 타입으로 옮긴 ID로 객체에 추가 후, 새로운 마일스톤으로 옮기기 위해 
//	마일스톤을 스캔해서 어느 마일스톤으로 옮겨야 하는지 마일스ID를 검색하는 함수
	function findTargetMilestone(alphastateHashID){
		$('.milestoneObj').each(function(index){
			var milestoneObjHashID = $(this).attr('id');
			var liArr = $(this).find('li');
			for(var i=0;i<liArr.length;i++){
				if($(liArr[i]).attr('id')==alphastateHashID){
					defaultEssenceObj.moveAlphaState(alphastateHashID, milestoneObjHashID);
				}
			}
		});
	}
/////////////////////////////////////////
//	
//	드레그 속성 추가부분	
//	
/////////////////////////////////////////
//	메뉴 리스트에 드레그 속성추가
	function addClassDraggable(target){
		$(target).each(function(){
			var $this = $(this);
			var alphaID = $(this).attr('value');
			var sortableNumber = alphaID.substr(1,1);
			var connectToSortableStr = ".sortable"+sortableNumber;
			var generatedAlphaObj;
			var generatedAlphaObjHashID;
			var returnHtml;
			$this.draggable({
				start : function(){
				},
				helper : function(e){
					this.val = $(e.currentTarget).attr('value');
					generatedAlphaObj = loadAlphaState(this.val);
					tmpSaveMoveObj = generatedAlphaObj;
					returnHtml = createAlphaHtml(generatedAlphaObj);
					return returnHtml;
				},
				connectToSortable : connectToSortableStr,
				stop : function(e){
					var value='';
					//생성한 알파스테이트 객체를 에센스 객체에 추가
					var checkNumber = reflashMilestone(tmpSaveMoveObj);
					
					if(checkNumber==1){
						//add draggable to new obj
						generatedAlphaObjHashID = "#"+generatedAlphaObj.hashID;
						
//					drag -> sortable로 이전용 주석
						$('.milestoneObj li').css('height','auto');
						//리스트에서 테이블로 드래그 해서 생성한 객체정보 전송
						// tmpSaveMilestoneHashID2 <- 전역 변수
						//connectToSortableStr <- 정렬할 라인 변수
						
						//객체 추가위치를 정하기 위해 생성한 객체의 다음요소의 유무값과 아이디를 전송
						var nextAlphaObjId = '#'+$(generatedAlphaObjHashID).next().attr('id');
						var nextAlphaObjLength = $(generatedAlphaObjHashID).next().length;
						var checkObjSizValue=$(generatedAlphaObjHashID).size();
						socket.emit('addAlphastate',returnHtml,tmpSaveMilestoneHashID2,generatedAlphaObj,connectToSortableStr,nextAlphaObjLength,nextAlphaObjId);
					}
				}
			});
		});
	}
//	마일스톤에 올라간 리스트에 적용할 드레그 속성 
	function addDraggableAlphastate(target,connectToSortableStr){
		var targetId;
		var userName;
		target.draggable({
			start : function(e){
				this.val = $(e.currentTarget).attr('value');
				tmpSaveMoveAlphaStateHashID=e.currentTarget.id;
			},
			drag : function(){
				
			},
			connectToSortable : connectToSortableStr,
			scroll : false,
			stop : function(e){
				findTargetMilestone(tmpSaveMoveAlphaStateHashID);
				defaultEssenceObj.convertObjToJson();
				$('.milestoneObj li').css('height','auto');
				// console.log(defaultEssenceObj);
				
			}
		}).disableSelection();
	}
//	추가한 마일스톤끼리 sortable 이어주는 함수
	function addClassSortable(target){
		var connectWithValue = $(target).attr('class');
		var tmp = connectWithValue.substr(8,1);
		var index = Number(tmp)-1;
		var targetHashId;
		var connectWithArr = [".sortable1",".sortable2",".sortable3",".sortable4",".sortable5",".sortable6",".sortable7"]
		target.sortable({
			connectWith : connectWithArr[index],
//			connectToSortable : connectWithArr[index],
			start : function(e,ui){
				targetHashId = ui["helper"][0].id;
//				console.log(ui["helper"][0].id);
			},
			sort : function(e,ui){
				var targetOffset = ui["offset"];
				targetHashId = "#"+ui["helper"][0].id;
				var targetTop = Math.floor(ui["offset"]["top"])+"px"; 
				var targetLeft = Math.floor(ui["offset"]["left"])+"px";
				
				
//				console.log(e);
//				console.log(ui);
//				console.log(targetHashId);
//				console.log(targetLeft);
//				console.log(targetTop);
//				socket.emit("move",".ui-state-default",targetLeft,targetTop);
				socket.emit("move",targetHashId,targetLeft,targetTop);
			},
			stop : function(e,ui){
				socket.emit("dragStop",targetHashId);
			},
			update : function(){
				var milestoneHashIdMoveto = "#"+$($($(targetHashId)[0]).parent().parent().parent()).attr('id');
				targetHashId;
				var targetEqNumber = $(this).attr('class').substr(8,1)-1;
//				console.log($($(targetHashId)[0]).parent());
//				console.log(this);//마일스톤 아이디
//				console.log($(targetHashId).next().attr('id'));
//				console.log($(targetHashId).next().length);
				//다음요소가 없다면 마일스톤아이디와 라인넘버로 찾아가서 객체 수정
				//다음 요소가 있다면 다음 요소 직전에 붙여준다.
				var nextAlphaObjId = '#'+$(targetHashId).next().attr('id');
				var nextAlphaObjLength = $(targetHashId).next().length;
				
				console.log()
				var liObjCnt = $(targetHashId).parent().find("li").length;
				var targetObjIndex;
				for(var i=0; i<liObjCnt;i++){
					if("#"+$(targetHashId).parent().find("li").eq(i).attr('id')==targetHashId);
					//객체 순서를 바꾸는 것을 반영하기 위한 인덱스
					targetObjIndex=i;
				}
				
				//순서변경 반영 
				
				socket.emit("sortableUpdate",targetHashId,milestoneHashIdMoveto,targetEqNumber,nextAlphaObjLength,nextAlphaObjId,targetObjIndex);
				//html변경
				//객체 변경
//				console.log($(targetHashId).next());
				defaultEssenceObj.moveAlphaState(targetHashId.replace("#",""), milestoneHashIdMoveto.replace("#",""),targetObjIndex);
			},
			scroll : false,
		}).disableSelection();
	}
	
/////////////////////////////////////////
//	
//	객체조작부분
//	
/////////////////////////////////////////
	function loadAlphaState(targetID){
		this.selectedDataFromJson = essenceJsonData[targetID];
		this.checklistObj = loadChecklist(this.selectedDataFromJson.checkList); 
		this.alphaName = this.selectedDataFromJson.name;
		
		return new alphaStateObj(createHashID(),targetID,this.alphaName,this.checklistObj);
	}
	
	function loadChecklist(checklistArr){
		var returnObjArr=[];
		for(var i=0;i<checklistArr.length;i++){
			var mKey = checklistArr[i];
			var id = essenceJsonData[mKey].id;
			var desc = essenceJsonData[mKey].desc;
			returnObjArr.push(new checkListObj(createHashID(),id,desc))
		}
		return returnObjArr;
	}
	
/////////////////////////////////////	
//	
//	체크리스트부분
//	
/////////////////////////////////////	
	
	
	
	
/////////////////////////////////////	
//	
//	이벤트핸들러
//	
/////////////////////////////////////	
	// add milestone btn -> Create new milestone
	$('.alphaListField').append(makeListHtml());//임시 이벤
	addClassDraggable($('.alphaLists'));//임시이벤트
	$('body').on('click','.addMilestoneBtn',function(){
		$('.essenceField').append(createMilestoneHtml());
		addClassSortable($('.sortable1'));
		addClassSortable($('.sortable2'));
		addClassSortable($('.sortable3'));
		addClassSortable($('.sortable4'));
		addClassSortable($('.sortable5'));
		addClassSortable($('.sortable6'));
		addClassSortable($('.sortable7'));
		socket.emit('addMilestone',tmpSaveMilestoneHashID);
	});
	$('body').on('click','.removeMilestoneBtn',function(){
		var milestoneID = $(this).parent().parent().attr('id');
		defaultEssenceObj.removeMilestone(milestoneID);//객체 제거
		$(this).parent().parent().remove();//뷰제거
		socket.emit('removeMilestone',milestoneID);
	});
	$('body').on('click','.checklistToggleBtn',function(){
		$(this).parent().find('.checklistDesc').toggle();
	});
//	$('input').change(function(){
//		console.log($(this).val());
//	});
	$('body').on('keypress','.milestoneName',function(e){
		if(e.keyCode==13){//enter key
			var name = $(this).val();
			var id = $(this).parent().parent().attr('id');
			// console.log(id);
			$('.milestoneName').blur();
			socket.emit('milestoneName',name,id);
			defaultEssenceObj.changeMilestoneName(id, name);
		} else {
//			socket.emit('milestoneName',name,id);
//			defaultEssenceObj.changeMilestoneName(id, name);
		}
	});
	$('body').on('keypress','textarea',function(e){
		var activity = $(this).val();
		var id = $(this).parent().parent().attr('id');
		// console.log(id);
		$('.milestoneName').blur();
		socket.emit('milestoneActivity',activity,id);
		defaultEssenceObj.changeMilestoneName(id, activity);
		if(e.keyCode==13){//enter key
		} else {
//			socket.emit('milestoneName',name,id);
//			defaultEssenceObj.changeMilestoneName(id, name);
		}
	});
	$('body').on('click','.insertJSONBtn',function(e){
		var obj;
		var insertJson = prompt("에센스 JSON데이터를 입력하세요");
		// console.log(insertJson);
		obj = defaultEssenceObj.convertJsonToObj(insertJson);
		defaultEssenceObj.makeHtmlFromObj(obj);
		socket.emit('loadEssenceObj',insertJson);
	});
	$('body').on('click','.extractJSONBtn',function(){
		$('.jsonData').val("");
		$('.jsonData').val(defaultEssenceObj.convertObjToJson());
	});
	$('body').on('click','.loadMilestoneBtn',function(e){
		$('.essenceField').css("display","");
		$('.loginForm').css("display","none");
		$('.registerForm').css("display","none");
		$('.essenceFieldChecklist').css("display","none");
//		defaultEssenceObj.makeHtmlFromObj();
	});
	$('body').on('click','.checkBtn',function(e){
		e.preventDefault();
//		console.log(defaultEssenceObj);
//		console.log(defaultEssenceObj.size());
	});
	$('body').on('click','.checklists',function(){
		var checkedValue = $(this).is(":checked");
		var alphastateHashID = $(($(this).parent().parent().parent())[0]).attr('id');
	});
    $('body').on('click',".portlet-toggle",function() {
    	var icon = $( this );
    	var parentId = "#"+icon.parent().parent().parent().attr('id');
        icon.toggleClass( "ui-icon-plusthick ui-icon-minusthick" );
        icon.closest( ".portlet" ).find( ".portlet-content" ).toggle();
        socket.emit('toggleAlphastate',parentId);
        defaultEssenceObj.toggleAlphaState(parentId);
      });
    $('body').on('click',".ui-icon-close",function() {
    	var icon = $( this );
    	var parentObj = icon.parent().parent().parent();
    	var parentObjID = "#"+parentObj[0].id;
    	parentObj.remove();
    	//todo
    	//객체 삭제
    	//삭제한 객체 정보 전송
    	defaultEssenceObj.removeAlphaState(parentObjID);
    	socket.emit('removeAlphastate',parentObjID);
    });
    $('.essenceField').on('click','a',function(e){
    	e.preventDefault();
    });
    $('.topMenu').on('click','a',function(e){
    	$('.topMenu a').removeClass('pure-menu-selected');
    	$(this).addClass('pure-menu-selected');
    });
  
    
	socket.on('addMilestone',function(hashID){
		$('.essenceField').append(createMilestoneHtml(hashID));
		addClassSortable($('.sortable1'));
		addClassSortable($('.sortable2'));
		addClassSortable($('.sortable3'));
		addClassSortable($('.sortable4'));
		addClassSortable($('.sortable5'));
		addClassSortable($('.sortable6'));
		addClassSortable($('.sortable7'));
	});
	socket.on('removeMilestone',function(hashID){
		var milestoneID = '#'+hashID;
		defaultEssenceObj.removeMilestone(hashID);//객체 제거
		$(milestoneID).remove();//뷰제거
	});
	socket.on('removeAlphastate',function(hashID){
		var alphastateID = hashID;
		defaultEssenceObj.removeAlphaState(hashID);//객체 제거
		$(alphastateID).remove();//뷰제거
	});
	socket.on('toggleAlphastate',function(hashID){
		var alphastateID = hashID;
		var icon = $( alphastateID+" .portlet-toggle" );
		var parentId = "#"+icon.parent().parent().parent().attr('id');
        icon.toggleClass( "ui-icon-plusthick ui-icon-minusthick" );
        icon.closest( ".portlet" ).find( ".portlet-content" ).toggle();
        defaultEssenceObj.toggleAlphaState(parentId);
	});
	socket.on('addAlphastate',function(returnHtml,milestoneObjHashID,generatedAlphaObj,connectToSortableStr,nextAlphaObjLength,nextAlphaObjId){
		var alphaHashID = '#'+generatedAlphaObj.hashID;
		var rowNumber = (generatedAlphaObj.id).substr(1,1);
		var milestoneHashID = '#'+milestoneObjHashID+' .sortable'+rowNumber;
		//html 추가 
		//다음 요소가 없으면 그냥 append
		//다음 요소가 있다면 해당 요소의 전에 붙여준다.
		if(nextAlphaObjLength==0){
			$(milestoneHashID).append(returnHtml);
		} else {
			$(nextAlphaObjId).before(returnHtml);
		}
		//드래그 속성 부여하기
		// console.log($(generatedAlphaObj));
//		addDraggableAlphastate($(alphaHashID),connectToSortableStr);
		//객체에 추가하기
		defaultEssenceObj.addAlphaState(milestoneObjHashID, generatedAlphaObj);
	});
	socket.on('dragStart',function(targetId,userName){
		var targetObjId = '#'+targetId;
		var $target = $(targetObjId);
		// console.log('dragStart');
		// console.log(targetId+", "+userName);
		$target.css('background','yellow');
//		$target.append('<div class="userName">'+userName+'님이 움직이고 있습니다.</div>');
//		console.log($target.draggable( "option", "connectToSortable"));
//		$target.draggable( "option", "connectToSortable");
//		$target.draggable( "option", "connectToSortable", "" );
//		console.log($target.draggable( "option", "connectToSortable"));
//		$target.draggable('option','cancel',targetObjId);//누군가 드래그 하는 도중에 다른 사람이 해당 객체를 드래그 못하게 하는 부분
		
	});
	socket.on("getDragEvent", function(targetId,left,top){
		var targetHashID = targetId;
		var tmpSizeValue = $(targetHashID).size();
		if(tmpSizeValue==0){
			
		} else {
//			console.log($(targetHashID).draggable({helper:"clone"}));
			
			($(targetHashID)[0].style).position="absolute";
			($(targetHashID)[0].style).left=left;
			($(targetHashID)[0].style).top=top;
			($(targetHashID)[0].style).background="yellow";
//			console.log("get ("+left+","+top+")");
			
		}
	});
	socket.on('sortableUpdate',function(targetHashId,milestoneHashIdMoveto,targetEqNumber,nextAlphaObjLength,nextAlphaObjId){
		var html = $(targetHashId)[0];
//		console.log(html);
//		console.log(targetHashId);
//		console.log(milestoneHashIdMoveto);
		//html변경
		if(nextAlphaObjLength==0){
//			console.log($(milestoneHashIdMoveto+" td").eq(1));
			$(milestoneHashIdMoveto+" td ul").eq(targetEqNumber).append(html);
		} else {
			$(nextAlphaObjId).before(html);
		}
		//객체수정
		defaultEssenceObj.moveAlphaState(targetHashId.replace("#",""), milestoneHashIdMoveto.replace("#",""));
	});
	socket.on('dragStop',function(targetId,userName){
//		console.log('dragStop');
		var targetHashID = targetId;
		var tmpSizeValue = $(targetHashID).size();
		if(tmpSizeValue==0){
			
		} else {
//			console.log($(targetHashID).draggable({helper:"clone"}));
			
			($(targetHashID)[0].style).position="";//absolute속성 제거
			($(targetHashID)[0].style).background="#e6e6e6";//absolute속성 제거
//			$target.css('background','');
			
		}
		console.log();
//		$target.draggable('option','cancel','');//다른사람의 드래그가 끝난 후 해당 객체의 드래그 금지 속성을 풀어주는 함수
	});
	socket.on('loadEssenceObj',function(obj){
		// console.log(obj);
		defaultEssenceObj.makeHtmlFromObj(obj);
		
	});
	socket.on('milestoneName',function(name,id){
		// console.log(id);
		// console.log(name);
		// console.log($('#'+id+" .milestoneName"));
		$('#'+id+" .milestoneName").val(name);
		defaultEssenceObj.changeMilestoneName(id,name);
	});
	socket.on('milestoneActivity',function(name,id){
		// console.log(id);
		// console.log(name);
		// console.log($('#'+id+" .todoList"));
		$('#'+id+" textarea").val(name);
		defaultEssenceObj.changeMilestoneActivity(id,name);
	});


});