export type Troubleshooting = {
  title: string;
  problem: string;
  analysis?: string;
  solution: string;
  result: string;
};

export type Project = {
  slug: string;
  published: boolean;
  title: string;
  shortTitle: string;
  client: string;
  company: string;
  periodHint: string;
  oneLiner: string;
  role: string;
  thumbnail: string;
  /** 본문 중간 21:9 배너 이미지. 없으면 thumbnail 사용 */
  breakImage?: string;
  service: {
    name: string;
    tagline: string;
    points: string[];
  };
  outcomes: { before: string; after: string; label: string }[];
  overview: string[];
  problem: { heading: string; items: string[] }[];
  background: string[];
  questions?: string[];
  work: { title: string; items: string[] }[];
  troubleshooting?: Troubleshooting[];
  verification: { area: string; detail: string }[];
  tooling: string[];
  contribution: string[];
  insights: string[];
};

export const projects: Project[] = [
  {
    slug: 'yangju-sports-lighting',
    published: true,
    title: '[양주도시공사] 체육시설 스마트 조명 및 전력 관리 시스템',
    shortTitle: '양주 체육시설 스마트 조명',
    client: '양주도시공사',
    company: '(주)트로닉스',
    periodHint: 'Tronix · e-IoT · 2026.05 — 2026.08 · 펌웨어 5명',
    oneLiner:
      '10개 체육시설의 예약 일정에 맞춰 조명을 자동 제어하고, 실제 소비 전력을 측정·정산하는 IoT 시스템. 전력량 측정, 조명 고장 감지, 캘린더 스케줄, Plug & Play 설치 구조를 추가해 공공시설에 납품.',
    role: 'FreeRTOS 펌웨어·비즈니스 로직 · CT Sensor 고장 감지 · RS-485 전력량계 · LwM2M · FOTA · Plug & Play',
    thumbnail: '/projects/yangju-sports-lighting.webp',
    breakImage: '/projects/yangju-sports-lighting-site.webp',
    service: {
      name: '체육시설 스마트 조명·전력 관리',
      tagline: '예약 기반 조명 제어 + 소비전력 계측 + 원격 관제',
      points: [
        '양주시 10개 체육시설에 예약 일정 연동 자동 조명 제어와 실제 소비 전력 측정·정산 기능을 제공한다.',
        '기존 e-IoT 플랫폼에 전력량 측정, 조명 고장 감지, 캘린더 기반 자동 제어, Plug & Play 설치 구조를 추가했다.',
        '시설 관리자가 현장 방문 없이 모바일·PC에서 조명 일정을 제어하고, 전력 사용량·요금 정산 데이터를 활용할 수 있다.',
      ],
    },
    outcomes: [
      { label: '납품', before: '개발 중', after: '양주도시공사 검수 완료 · 10개 시설 적용' },
      { label: '고장 감지', before: '고정 Threshold', after: '30일 주기 자가 학습형 판단 로직' },
      { label: '포팅', before: '—', after: '신규 펌웨어 4일 내 완료' },
      { label: '코드 재사용', before: '—', after: '기존 아키텍처 70% 이상 재사용' },
      { label: '현장 출장', before: '개발자 매번 방문', after: 'Plug & Play로 출장 리소스 80% 절감' },
    ],
    overview: [
      '프로젝트 인원 5명. FreeRTOS 기반 펌웨어 및 비즈니스 로직 개발을 담당했다.',
      'CT Sensor/ADC 기반 조명 고장 감지, RS-485 전력량계 연동, 캘린더 스케줄링, LwM2M 통신 안정화, FOTA, Plug & Play 초기화 시퀀스를 구현했다.',
      '원격 FOTA로 현장 방문 없이 장애 대응이 가능하도록 설계했다.',
    ],
    problem: [
      {
        heading: '공공 IoT 설치·운영 병목',
        items: [
          '대규모 설치 시 개발자가 현장에서 통신·서버 연결을 수동 확인해야 하는 구조',
          '조명 고장을 고정 Threshold로만 판단하면 현장별 조명 특성·램프 노후화를 반영하기 어려움',
          '순차 점등 시 대용량 부하 증가를 스파이크 노이즈로 오인하는 전력 측정 오류',
        ],
      },
    ],
    background: [
      '기존 e-IoT 플랫폼의 공통 아키텍처를 경량화해 FreeRTOS 환경에 맞게 AsyncFramework를 적용했다.',
      '관제 페이지 예약 일정과 연·월·일·요일·시간대 기반 스케줄 제어로 시설 관리 자동화를 목표로 했다.',
    ],
    work: [
      {
        title: 'FreeRTOS 기반 경량 펌웨어 구조',
        items: [
          '불필요 기능 제거 및 사내 AsyncFramework FreeRTOS 경량화',
          '연·월·일·요일·시간대 기반 스케줄 제어 로직 구현',
          '관제 예약 일정과 조명 타워 자동 동작 연동',
        ],
      },
      {
        title: 'CT Sensor 자가 학습형 조명 고장 감지',
        items: [
          'CT Sensor + ADC로 W 단위 소비전력 변환',
          '초기 점등 후 측정값을 기준값으로 EEPROM 저장',
          '30일마다 자동 재학습으로 램프 노후화 반영',
          '관제 서버 Threshold 관리 및 고장 알림 연동',
        ],
      },
      {
        title: '소비전력 계측 및 서버 연동',
        items: [
          'RS-485 전력량계 연동으로 실제 조명 소비전력 측정',
          'LwM2M Observe로 주기적 서버 전달',
          '시설별 전력 사용량 분석·요금 정산 데이터 구조 설계',
        ],
      },
      {
        title: 'Plug & Play 설치 구조',
        items: [
          'Peripheral Self Check → LTE 연결 → LwM2M Bootstrap → Server Registration → Observe 설정 → 운영 시작',
          '현장 작업자는 릴레이·전원 결선만으로 설치 완료',
          '개발자는 관제 시스템에서 접속 상태만 확인',
        ],
      },
    ],
    troubleshooting: [
      {
        title: '대용량 조명 부하를 스파이크 노이즈로 오인한 전력 측정 오류',
        problem:
          '사내 테스트는 최대 1.2kW였으나 현장 램프 1개가 1.2~1.5kW. 500W 이상 변화를 스파이크로 무시하는 로직이 순차 점등의 정상 1kW+ 부하 증가를 누락시켰다.',
        solution:
          '단순 Threshold를 상태 기반 판단으로 변경 — 급격한 변화 시 첫 값 보류, 다음 측정에서 동일 수준 유지 확인 후 실제 부하로 반영.',
        result:
          '실제 부하 증가와 순간 노이즈 구분. 당일 운영 종료 후 LwM2M FOTA로 원격 배포해 전력 정산 데이터 누락 방지.',
      },
    ],
    verification: [
      { area: '납품', detail: '양주도시공사 검수 완료 · 10개 체육시설 현장 적용' },
      { area: 'FOTA', detail: '현장 방문 없이 펌웨어 원격 배포·장애 대응' },
      { area: '설치', detail: 'Plug & Play로 개발자 현장 출장 80% 절감' },
    ],
    tooling: ['FreeRTOS', 'LwM2M', 'LTE Cat.M1', 'RS-485', 'CT Sensor / ADC', 'EEPROM', 'FOTA'],
    contribution: [
      'FreeRTOS 펌웨어·비즈니스 로직 전반 개발',
      '자가 학습형 조명 고장 감지 및 전력 계측 파이프라인 설계',
      'Plug & Play 초기화 시퀀스로 대규모 설치 자동화',
    ],
    insights: [
      '고정 Threshold보다 현장 특성을 학습하는 구조가 장기 운영에 유리하다.',
      '전력 측정은 단순 필터링이 아니라 상태 기반 판단이 정확도를 높인다.',
      '설치 자동화는 개발 완료만큼 현장 운영 비용 절감에 기여한다.',
    ],
  },
  {
    slug: 'uzbekistan-solar-streetlight',
    published: true,
    title: '[우즈베키스탄 치르치크] 태양광 기반 스마트 가로등 글로벌 실증',
    shortTitle: '우즈베키스탄 태양광 가로등',
    client: '치르치크시',
    company: '(주)트로닉스',
    periodHint: 'Tronix · Off-grid · 2026.05 — 2026.07 · 6명',
    oneLiner:
      '전력 인프라 부족 지역에 태양광 Off-grid 스마트 가로등 8대·중계기를 구축. MPPT/BMS 원격 모니터링, LoRaWAN·LTE 통신, 현지 망 불안정·배터리 지연 등 운영 제약 대응.',
    role: 'Zephyr 펌웨어 포팅 · MPPT RS-485 · BMS UART · LTE Watchdog/Auto-Recovery · 현지 교육',
    thumbnail: '/projects/uzbekistan-solar-streetlight.png',
    service: {
      name: '태양광 Off-grid 스마트 가로등',
      tagline: '독립형 태양광 + 원격 모니터링 + 에너지 절감 스케줄',
      points: [
        '우즈베키스탄 치르치크 외곽에 전력망 없이 태양광·배터리로 구동하는 스마트 가로등 시스템.',
        'MPPT·BMS 정보를 LoRaWAN·LTE로 관제에 전달하고, 디밍 스케줄로 배터리 사용량을 관리한다.',
        '환경 센서·Edge AI(Jetson Nano)·교통 카메라까지 확장한 스마트시티 실증.',
      ],
    },
    outcomes: [
      { label: '실증', before: '—', after: '가로등 8대·중계기 구축' },
      { label: '모니터링', before: '—', after: 'MPPT/BMS 원격 모니터링' },
      { label: '통신', before: '3분 주기 단절', after: 'Watchdog·Auto-Recovery로 장기 안정성' },
      { label: '운영', before: '본품 배터리 지연', after: '임시 배터리 + 디밍으로 운영 지속' },
    ],
    overview: [
      '프로젝트 인원 6명. 기존 Zephyr 펌웨어의 태양광 기능 포팅·최적화, MPPT/BMS 드라이버, LTE Watchdog·Auto-Recovery, 현지 교육·장애 대응.',
      '해외 구축 전 Fault Injection Test로 장애 시나리오를 사전 검증했다.',
    ],
    problem: [
      {
        heading: '해외 Off-grid 운영 제약',
        items: [
          '현지 이동통신망 품질 불안정으로 LTE 중계기 통신 단절',
          '본품 배터리 공급 1.5개월 지연 — 차량용 12V 임시 배터리로 운영',
          '제한된 에너지 환경에서 야간 100% 출력 시 저전압 Shutdown 위험',
        ],
      },
    ],
    background: [
      '국내에서 재현하기 어려운 현지 통신·전력 제약 하에서 시스템 안정성을 검증하는 해외 실증 프로젝트.',
      'RS-485 MPPT, UART BMS, LoRaWAN·LTE 이중 통신망 구조.',
    ],
    work: [
      {
        title: 'Off-grid 전력 모니터링',
        items: [
          'RS-485 MPPT · UART BMS 연동',
          '태양광 충전·배터리 전압·충방전·잔여 전력 원격 수집',
          '국내 관제에서 현지 전원 상태 실시간 확인',
        ],
      },
      {
        title: '에너지 절감형 조명 스케줄',
        items: [
          '현지 시간·RTC 기준 새벽 디밍·주요 시간대 100% 점등',
          'Off-grid 배터리 사용량 관리',
        ],
      },
      {
        title: 'Edge AI·환경 센서 확장',
        items: [
          '환경 센서, Jetson Nano, 교통·유동량 카메라 연동',
          '조명 제어를 넘어 스마트시티 환경 데이터 수집',
        ],
      },
    ],
    troubleshooting: [
      {
        title: '현지 LTE 망 품질 문제로 중계기 통신 단절',
        problem: '1차 설치 시 LTE 연결이 약 3분 주기로 반복 단절.',
        analysis: '통신 모듈·펌웨어만이 아닌 현장 통신사 스캔·비교 — 특정 사업자 품질 문제 확인.',
        solution: '안정적 통신사 수동 고정 + Watchdog·Auto-Recovery(LTE 모듈 재초기화·재접속) 추가.',
        result: '즉각 장애 해결 및 장기 운영 재발 방지.',
      },
      {
        title: '본품 배터리 지연 — 저전압 Shutdown 위험',
        problem: '차량용 12V 임시 배터리로 야간 100% 출력 시 MPPT 저전압 보호 동작 예상.',
        analysis: '현장 부하 테스트로 저전압 시 MPPT 출력 차단 확인.',
        solution: '원격 관제 디밍 스케줄 조정으로 배터리 소모 관리.',
        result: '본품 배터리 도착 전까지 제한 하드웨어 조건에서 운영 유지.',
      },
    ],
    verification: [
      { area: '실증', detail: '8대 가로등·중계기 · 치르치크시 운영 교육' },
      { area: '사전 검증', detail: 'Fault Injection Test로 장애 시나리오 검증' },
    ],
    tooling: ['Zephyr OS', 'RS-485 MPPT', 'UART BMS', 'LoRaWAN', 'LTE', 'Watchdog', 'RTC'],
    contribution: [
      '태양광 시스템 펌웨어 포팅·최적화',
      'MPPT/BMS 드라이버 및 LTE Watchdog·Auto-Recovery',
      '현지 장애 분석·대응·운영 교육',
    ],
    insights: [
      '해외 현장은 통신·전력 변수가 크므로 원인 분석 범위를 네트워크·하드웨어까지 확장해야 한다.',
      '임시 조건에서도 원격 디밍·스케줄로 운영 연속성을 확보할 수 있다.',
    ],
  },
  {
    slug: 'smartcity-env-traffic',
    published: true,
    title: '스마트시티 환경·교통 데이터 수집 시스템',
    shortTitle: '환경·교통 데이터 수집',
    client: '스마트시티',
    company: '(주)트로닉스',
    periodHint: 'Tronix · e-IoT · 2025.01 — 2025.06 · 6명',
    oneLiner:
      '공공조명 e-IoT 플랫폼을 환경·기상·교통 데이터 수집으로 확장. Quectel BG95 LTE Cat.M1, 기상 센서, Jetson Nano, LwM2M 연동.',
    role: 'BG95 드라이버 · 비즈니스 로직 · Zephyr AsyncFramework · RS-485/UART 연동',
    thumbnail: '/projects/smartcity-env-traffic.png',
    service: {
      name: '환경·교통 데이터 수집 플랫폼',
      tagline: '조명 제어 플랫폼 → 환경 모니터링·Edge AI 확장',
      points: [
        '기존 LoRaWAN 중심 제품에 LTE Cat.M1을 OOP 상속 구조로 추가.',
        'RS-485 기상·환경 센서, UART Jetson Nano 데이터를 LwM2M으로 서버 전달.',
        '조명 중심 플랫폼을 환경 모니터링 영역으로 확장, 신규 IoT 제품 2종 기반 마련.',
      ],
    },
    outcomes: [
      { label: '통신', before: 'LoRaWAN only', after: 'LTE Cat.M1 추가' },
      { label: '재사용', before: '—', after: '기존 코드 70% 이상 재사용' },
      { label: '플랫폼', before: '조명 제어', after: '환경·Edge AI 통합 수집' },
    ],
    overview: [
      '프로젝트 인원 6명. Quectel BG95 통신 드라이버, 전체 비즈니스 로직, Zephyr AsyncFramework 개선, RS-485/UART 외부 디바이스 연동.',
    ],
    problem: [
      {
        heading: '플랫폼 확장 요구',
        items: [
          'LoRaWAN만으로는 LTE 기반 환경·교통 데이터 수집 요구 충족 불가',
          '이기종 센서·Edge AI 데이터를 공통 구조로 통합 필요',
          '강우 센서 누적 데이터 초기화 주기 오류(2초)로 통계 생성 불가',
        ],
      },
    ],
    background: [
      '공통 부모 클래스 유지 + BG95 자식 클래스로 Cat.M1 기능만 추가하는 OOP 상속 구조.',
      'Zephyr AsyncFramework 유지, 프로젝트별 비즈니스·통신 클래스만 교체.',
    ],
    work: [
      {
        title: 'LTE Cat.M1 통신 모듈 추가',
        items: [
          'Quectel BG95 AT Command·PPP 기반 모뎀 제어',
          '연결 관리·데이터 전송·상태 관리 로직 재사용',
          'OOP 상속으로 LoRaWAN 코드와 공통 인터페이스 공유',
        ],
      },
      {
        title: '환경 센서·Jetson Nano 연동',
        items: [
          'RS-485 기상·환경 센서, UART Jetson Nano',
          '공통 데이터 구조 변환 후 LwM2M 서버 전달',
        ],
      },
      {
        title: '아키텍처 재사용성 검증',
        items: [
          '코어 아키텍처 변경 없이 신규 제품 적용',
          '공통 펌웨어 구조의 확장성 실증',
        ],
      },
    ],
    troubleshooting: [
      {
        title: '강우량 데이터 초기화 주기 오류',
        problem: '강우 센서 누적 데이터가 약 2초마다 초기화되어 시간 단위 강우 통계 생성 불가.',
        solution:
          '누적 초기화 60분, 서버 보고 10분(1시간 6개 누적 데이터). 서버와 협의해 현재·이전 누적값 차이 계산.',
        result: '10분 단위 강우량·시간당 누적 강우량 모두 관제에서 확인 가능.',
      },
    ],
    verification: [
      { area: '제품', detail: '신규 IoT 제품 2종 개발 기반' },
      { area: '데이터', detail: '환경·Edge AI 통합 수집 구조' },
    ],
    tooling: ['Zephyr OS', 'Quectel BG95', 'LwM2M', 'RS-485', 'UART', 'Jetson Nano'],
    contribution: [
      'BG95 LTE Cat.M1 드라이버 및 비즈니스 로직',
      'AsyncFramework 개선 및 센서 통합 파이프라인',
    ],
    insights: [
      '통신 모듈 추상화는 신규 망 추가 시 전면 재작성 없이 확장 가능하게 한다.',
      '센서 데이터 파이프라인은 초기화·보고 주기를 서버 통계 요구와 함께 설계해야 한다.',
    ],
  },
  {
    slug: 'seosan-public-lighting',
    published: true,
    title: '[서산시] 공공조명 IoT 시스템 안정화 및 LwM2M 전환',
    shortTitle: '서산 공공조명 IoT',
    client: '서산시',
    company: '(주)트로닉스',
    periodHint: 'Tronix · LoRaWAN · 2023.12 — 2025.12 · 1차 8명 / 2차 5명',
    oneLiner:
      '운영 중 통신 두절·Hang·Hard Fault 해결을 위해 Mbed→Zephyr 포팅, 커스텀 프로토콜→LwM2M/CoAP/TLV 전환. Join 20분→3분, 중계기 20→68대, Payload 70% 절감.',
    role: '1차: Mbed·LoRaWAN·Delta FOTA · 2차: Zephyr·LwM2M·장애 분석·Clock 대응',
    thumbnail: '/projects/seosan-public-lighting.png',
    service: {
      name: '서산시 공공조명 IoT',
      tagline: 'LoRaWAN 공공조명 · LwM2M 표준 전환 · 운영 안정화',
      points: [
        '4회로 조명 제어 디바이스의 원격 관제·FOTA·장애 복구.',
        '1차 Mbed OS + 커스텀 통신 + VCDIFF Delta FOTA.',
        '2차 Zephyr OS + LwM2M 표준 + Watchdog Auto-Recovery로 운영 안정성 개선.',
      ],
    },
    outcomes: [
      { label: 'Join 시간', before: '최대 20분', after: '3분 이내' },
      { label: '중계기 수용', before: '20대', after: '68대' },
      { label: '장애 대응', before: '현장 방문·수동 재부팅', after: '복구 시간 75% 단축' },
      { label: 'Payload', before: '커스텀 패킷', after: 'TLV로 약 70% 절감' },
      { label: '바이너리', before: '580KB', after: '411KB (HSI Clock 전환)' },
    ],
    overview: [
      '1차: Mbed OS 펌웨어·커스텀 프로토콜·LoRaWAN·VCDIFF Delta FOTA.',
      '2차: Zephyr 포팅·LwM2M·CoAP+TLV·운영 장애 원인 분석·개선.',
    ],
    problem: [
      {
        heading: '운영 환경 장애',
        items: [
          'Task Stack Overflow → Hard Fault',
          'LoRa 모뎀 커스텀 펌웨어 응답 불가 → 통신 정지',
          'Zephyr 포팅 시 외부 HSE/RTC Clock 결함으로 부팅 중단',
          'LoRaWAN 반이중 특성 미고려 시 충돌·데이터 유실',
        ],
      },
    ],
    background: [
      '커스텀 시스템의 유지보수 한계로 OS·통신 구조 전면 재설계.',
      'Bootstrap, Observe, FOTA 등 LwM2M 표준 디바이스 관리 기능 도입.',
    ],
    work: [
      {
        title: '1차 — Delta FOTA',
        items: [
          'Mbed OS 4회로 조명 제어 펌웨어',
          'LoRaWAN Payload 분할 전송 + Open-VCDIFF Delta FOTA',
        ],
      },
      {
        title: '2차 — Zephyr·LwM2M 전환',
        items: [
          'Mbed→Zephyr, 커스텀→LwM2M/CoAP/TLV',
          'Observe 기반 서버 주도 데이터 보고',
          '실패 패킷 반복 대신 상태 확인 독립 패킷 복구 시퀀스',
        ],
      },
      {
        title: 'LoRaWAN 통신 흐름 제어',
        items: [
          '디바이스 주도 주기 보고 → LwM2M Observe 기반 재구성',
          '충돌·유실 방지 예외 처리',
        ],
      },
    ],
    troubleshooting: [
      {
        title: 'Task Stack Overflow → Hard Fault',
        problem: '특정 조건에서 Stack Overflow로 MCU Hard Fault.',
        solution: 'Task Stack·Heap 재분석, Stack 재설정, Watchdog Auto-Recovery.',
        result: '장애 대응 시간 최대 75% 단축.',
      },
      {
        title: 'LoRa 모뎀 커스텀 펌웨어 통신 정지',
        problem: '커스텀 모뎀 펌웨어가 특정 상황에서 응답 불가.',
        solution: '제조사 순정 펌웨어 + UART AT Command, LwM2M 표준화.',
        result: '커스텀 유지보수 영역 축소, 통신 안정성 개선.',
      },
      {
        title: '기존 PCB 외부 Clock 결함',
        problem: 'Zephyr 커널 초기화에서 부팅 중단 — 외부 HSE/RTC 미동작.',
        solution:
          'Device Tree·Clock를 HSI 내부 Clock으로 변경, Buffer·Stack·메모리 최적화. 보드 교체 없이 신규 펌웨어 운영.',
        result: '바이너리 580KB→411KB, 하드웨어 교체 비용 없이 생명주기 연장.',
      },
    ],
    verification: [
      { area: '납품', detail: '서산시 공공 IoT 프로젝트 납품' },
      { area: '모뎀', detail: '순정 펌웨어 + UART AT 전환' },
    ],
    tooling: ['Mbed OS', 'Zephyr OS', 'LoRaWAN', 'LwM2M', 'CoAP', 'TLV', 'Open-VCDIFF', 'Watchdog'],
    contribution: [
      '1차·2차 펌웨어 설계·포팅·리팩토링',
      'LoRaWAN Join 최적화·LwM2M 통신 구조',
      'Clock 결함 대응 및 메모리 최적화',
    ],
    insights: [
      'OS 포팅은 숨겨진 하드웨어 결함을 드러낼 수 있다 — Clock Tree 분석이 중요하다.',
      '커스텀 통신·모뎀 펌웨어는 단기 이득보다 장기 유지보수 비용이 크다.',
    ],
  },
  {
    slug: 'smartcity-iot-platform',
    published: true,
    title: '스마트시티 범용 IoT 플랫폼 초기 코어 펌웨어 개발',
    shortTitle: '범용 IoT 플랫폼 코어',
    client: '스마트시티',
    company: '(주)트로닉스',
    periodHint: 'Tronix · Mbed OS · 2023.01 — 2023.12 · 5명',
    oneLiner:
      '조명 제어 중심 제품을 환경 센서·Edge AI·태양광 BMS/MPPT·LoRaWAN을 연결하는 범용 스마트시티 IoT 플랫폼 초기 코어. 이후 다수 공공 IoT 프로젝트의 기반 펌웨어.',
    role: 'Mbed OS 시스템·비즈니스 로직 · UART/SPI/QSPI · 센서 통합 · LoRaWAN 프로토타입',
    thumbnail: '/projects/smartcity-iot-platform.png',
    service: {
      name: '범용 스마트시티 IoT 플랫폼',
      tagline: '다중 디바이스·통신을 하나의 MCU에서 제어',
      points: [
        '환경 센서, Jetson Nano, BMS, MPPT, LoRaWAN 모듈 등 확장형 연결 구조.',
        '비즈니스 로직과 장치 제어 분리 — 신규 하드웨어 추가 시 코어 변경 최소화.',
        '광주광역시 태양광 가로등 실증 등 이후 지자체 프로젝트 공통 기반.',
      ],
    },
    outcomes: [
      { label: '구조', before: '조명 제어 단일', after: '다중 센서·통신 연동' },
      { label: '재사용', before: '—', after: '지자체 프로젝트 공통 인터페이스' },
      { label: '실증', before: '—', after: '광주 태양광 가로등 적용' },
    ],
    overview: [
      '프로젝트 인원 5명. Mbed OS 기반 시스템·비즈니스 로직, UART/SPI/QSPI 디바이스 연동, MPPT/BMS 인터페이스, RAK3172 LoRaWAN 프로토타입.',
    ],
    problem: [
      {
        heading: '단일 제품 → 플랫폼 전환',
        items: [
          '조명 릴레이 제어만으로는 스마트시티 확장 요구 충족 불가',
          '서로 다른 인터페이스(UART/SPI/QSPI) 디바이스 통합 필요',
          '향후 제품군 확장을 고려한 아키텍처 설계 필요',
        ],
      },
    ],
    background: [
      '관제 플랫폼 요구 분석 후 확장형 펌웨어 구조 설계.',
      '이후 여러 공공 IoT 프로젝트에서 재사용된 코어 아키텍처의 시작점.',
    ],
    work: [
      {
        title: '확장형 Firmware Architecture',
        items: [
          '비즈니스 로직·장치 제어 계층 분리',
          '환경 센서·Jetson·BMS·MPPT·LoRaWAN 지원 대상 정의',
        ],
      },
      {
        title: '다중 Hardware Interface',
        items: [
          'UART, SPI, QSPI로 이기종 센서·통신 모듈 제어',
          'Mbed Peripheral API 활용으로 저수준 구현 시간 단축',
        ],
      },
      {
        title: 'LoRaWAN 원격 제어 프로토타입',
        items: [
          'RAK3172 LoRaWAN 프로토타입',
          '데이터 보고·서버 원격 명령 처리 구조',
        ],
      },
    ],
    verification: [
      { area: '플랫폼', detail: '복합 데이터(환경·배터리·교통) 수집 구조' },
      { area: '확장', detail: '공공조명→스마트시티 플랫폼 기반 마련' },
    ],
    tooling: ['Mbed OS', 'UART', 'SPI', 'QSPI', 'RAK3172 LoRaWAN', 'MPPT', 'BMS'],
    contribution: [
      '초기 코어 아키텍처·센서 통합 구조 설계',
      'MPPT/BMS 데이터 수집 인터페이스 초기 설계',
      'LoRaWAN 통신 프로토타입',
    ],
    insights: [
      '초기 코어 설계가 이후 프로젝트 재사용률과 포팅 기간을 좌우한다.',
      'Peripheral API 활용은 비즈니스 로직에 리소스를 집중하게 한다.',
    ],
  },
  {
    slug: 'sendori-air-quality',
    published: true,
    title: '[센도리] 실내 공기질 모니터링 센서 펌웨어 개발',
    shortTitle: '센도리 공기질 센서',
    client: '센도리',
    company: '(주)트로닉스',
    periodHint: 'Tronix · ESP32 · 2022.08 — 2023.05 · 4명',
    oneLiner:
      'ESP32 + Arduino로 5종 공기질 센서 데이터 수집·Wi-Fi JSON 전송. UART/I2C/SPI 다중 센서, 98%+ 전송 성공률, 온도 오차 3~3.5℃ → 하드웨어·펌웨어 통합 개선.',
    role: '펌웨어 비즈니스 로직 전담 · ESP32 · 다중 센서 · JSON Wi-Fi 통신 · Driver 리팩토링',
    thumbnail: '/projects/sendori-air-quality.png',
    service: {
      name: '실내 공기질 모니터링',
      tagline: '5종 센서 통합 · Wi-Fi JSON · 상용화 수준 데이터 신뢰성',
      points: [
        '온도·습도·미세먼지·CO₂·TVOC 등 5종 공기질 데이터 통합 수집.',
        '하나의 ESP32에서 센서 수집과 Wi-Fi 서버 통신 동시 수행.',
        '센서→PCB→기구→Firmware 전체 분석으로 측정 오차 해결.',
      ],
    },
    outcomes: [
      { label: '전송', before: '—', after: '98% 이상 성공률' },
      { label: '온도 오차', before: '3~3.5℃', after: '기준 장비 수준' },
      { label: '습도', before: '—', after: '기준 대비 ±2%' },
    ],
    overview: [
      '프로젝트 인원 4명. 펌웨어 비즈니스 로직 전담, ESP32 시스템, 5종 센서 연동, JSON 통신, 센서 변경 Driver 리팩토링.',
    ],
    problem: [
      {
        heading: '데이터 신뢰성',
        items: [
          'CB-HCHO-V4 통합 센서 온도가 기준 대비 3~3.5℃ 높게 측정',
          '케이스 장착·발열 센서·밀폐 구조가 복합적으로 영향',
          '펌웨어 보정만으로는 상용화 수준 달성 어려움',
        ],
      },
    ],
    background: [
      '원가·개발 기간 고려해 Wi-Fi 내장 ESP32 + Arduino Framework 선정.',
      '별도 통신 MCU 없이 단일 MCU 구조.',
    ],
    work: [
      {
        title: '다중 센서 Interface',
        items: [
          'UART/I2C/SPI 공기질 센서 연동',
          '센서별 프로토콜·공통 데이터 가공',
        ],
      },
      {
        title: 'JSON Wi-Fi 통신',
        items: [
          'Device ID, Sensor Type, Value, Time JSON 포맷',
          '주기 전송 98% 이상 성공률',
        ],
      },
      {
        title: '센서·하드웨어 구조 개선',
        items: [
          '35mm 배기팬, 발열 센서 위치 변경, 격벽 추가',
          'SHT40(온습도) + SGP30(TVOC) 독립 센서로 교체',
          'I2C Driver·수집 로직 리팩토링',
        ],
      },
    ],
    troubleshooting: [
      {
        title: '온·습도·TVOC 측정값 오차',
        problem: 'CB-HCHO-V4 온도 3~3.5℃ 오차. 펌웨어 로직 이상 없음.',
        analysis:
          '케이스 장착/탈거, 배기팬, 센서 자체 오차 비교 — 통합 센서 오차 + 케이스 내부 발열 복합 원인.',
        solution:
          '기구 개선(팬·격벽·위치) + SHT40/SGP30 독립 센서 + I2C Driver 리팩토링.',
        result: '온도·습도 기준 장비 수준. Sensor→PCB→기구→Firmware 통합 분석 경험.',
      },
    ],
    verification: [
      { area: '전송', detail: '주기 전송 98% 이상' },
      { area: '정확도', detail: '온도·습도 상용화 수준' },
    ],
    tooling: ['ESP32', 'Arduino Framework', 'UART', 'I2C', 'SPI', 'Wi-Fi', 'JSON'],
    contribution: [
      '펌웨어 비즈니스 로직·센서 수집·Wi-Fi 통신 전담',
      '센서 교체 Driver 리팩토링 및 하드웨어 협업',
    ],
    insights: [
      '측정 오차는 펌웨어만이 아닌 Sensor→PCB→기구→Firmware 전체 시스템 문제일 수 있다.',
      '단일 MCU(Wi-Fi 내장)는 IoT 원가·개발 기간에 유리하다.',
    ],
  },
];

export const publishedProjects = projects.filter((p) => p.published);

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug && p.published);
}
