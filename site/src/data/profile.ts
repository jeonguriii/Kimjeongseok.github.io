export const profile = {
  name: '김정석',
  nameEn: 'Kim Jeong-seok',
  role: 'Embedded Firmware Engineer',
  headline: '재사용 가능한 구조와 안정적인 시스템을 설계하는 임베디드 개발자',
  tagline:
    'STM32·ESP32 기반 IoT — 스마트 공공조명, 환경 센서, 원격 제어, 독립형 태양광 시스템',
  years: '경력 3년+',
  summary:
    'STM32와 ESP32 기반 IoT 임베디드 시스템을 개발하며 스마트 공공조명, 환경 센서, 원격 제어, 독립형 태양광 시스템 등 실제 현장에서 운영되는 제품을 구축해 왔습니다. OOP 기반 펌웨어 아키텍처와 RTOS 독립적 모듈 구조로 프로젝트 간 코드 70% 이상 재사용, LoRaWAN·LTE Cat.M1·LwM2M·FOTA 등 원격 IoT 통신과 Watchdog·Auto-Recovery로 현장 운영 안정성을 개선합니다.',
  contact: {
    email: 'js960426@gmail.com',
    phone: '+82 10-2058-4921',
    phoneHref: '+821020584921',
  },
  experience: [
    {
      period: '2022.07 — 현재',
      company: '(주)트로닉스',
      companyEn: 'Tronix',
      role: 'Embedded Firmware Engineer',
      focus: 'STM32·ESP32 IoT 펌웨어 · OOP 아키텍처 · LoRaWAN/LTE/LwM2M · FOTA',
      products: '스마트 공공조명 · 환경 센서 · 태양광 Off-grid · e-IoT 플랫폼',
      bullets: [
        'STM32 기반 스마트 공공조명 및 IoT 제품군 펌웨어 설계·개발',
        'Mbed OS, Zephyr OS, FreeRTOS 기반 시스템 설계 및 제품 포팅',
        'OOP 기반 공통 아키텍처로 프로젝트 간 코드 재사용률 70% 이상 확보',
        'LoRaWAN, LTE Cat.M1, LwM2M 기반 원격 통신 시스템 개발',
        'Watchdog 및 Auto-Recovery 구조를 통한 현장 운영 안정성 개선',
        'OTA/FOTA 시스템 구축 및 원격 유지보수 프로세스 적용',
        'UART, SPI, I2C, RS-485 기반 센서·통신 모듈 드라이버 개발',
        '공공기관 및 해외 실증 프로젝트 현장 구축·기술 지원',
      ],
    },
    {
      period: '2021.07 — 2022.02',
      company: '(주)게더링',
      companyEn: 'Gathering',
      role: 'Frontend Developer Intern',
      focus: 'React 웹 서비스 UI · REST API 연동 · Git 협업',
      products: '웹 서비스',
      bullets: [
        'React 기반 웹 서비스 UI 및 기능 개발',
        'REST API 기반 프론트엔드-서버 연동',
        'Git 기반 형상관리 및 협업 프로세스 경험',
      ],
    },
  ],
  skills: [
    {
      group: 'Embedded C / C++',
      items: [
        '객체지향 펌웨어 모듈화',
        'Heap / Stack 메모리 관리',
        'Task Stack Size 분석·최적화',
        'MCU 메모리·바이너리 최적화',
      ],
    },
    {
      group: 'MCU / RTOS',
      items: [
        'STM32 — Peripheral·외부 디바이스 연동, J-Link/ST-Link',
        'ESP32 — Wi-Fi IoT, 다중 센서, JSON 서버 통신',
        'Mbed OS · Zephyr OS · FreeRTOS',
        'RTOS 독립 공통 비즈니스 로직·모듈 구조',
      ],
    },
    {
      group: 'Firmware Architecture',
      items: [
        'OOP 기반 계층 분리·통신 모듈 추상화',
        '하드웨어·RTOS 변경 대응 설계',
        '코드 재사용률 70%+ · 신규 포팅 4일',
      ],
    },
    {
      group: 'Network / IoT',
      items: [
        'LoRaWAN — Join 최적화·흐름 제어·예외 처리',
        'LTE Cat.M1 — Quectel BG95, AT Command, PPP',
        'LwM2M / CoAP — Bootstrap, Observe, FOTA, TLV',
      ],
    },
    {
      group: 'Hardware Interface',
      items: [
        'UART · I2C · SPI · QSPI · RS-485 · ADC · GPIO',
        '센서, LTE/LoRa 모뎀, MPPT, BMS, 전력량계, Jetson Nano',
      ],
    },
    {
      group: 'OTA / FOTA',
      items: [
        'LwM2M FOTA · LoRaWAN 분할 전송',
        'VCDIFF Delta Update · 원격 유지보수 프로세스',
      ],
    },
    {
      group: 'Tools',
      items: [
        'VS Code · PlatformIO · STM32CubeProgrammer',
        'Git · J-Link · ST-Link · CMake',
      ],
    },
  ],
  howIWork: [
    {
      title: '현상이 아니라 Root Cause를 찾습니다.',
      body: 'Application → RTOS → Driver → Protocol → Modem → Sensor → PCB → Network까지 범위를 확장하며 원인을 단계적으로 좁힙니다. 센서 오차가 케이스 발열 문제였던 사례, OS 포팅 중 PCB Clock 결함을 발견한 경험이 있습니다.',
    },
    {
      title: '장애가 발생해도 스스로 복구할 수 있는 시스템을 설계합니다.',
      body: '원격 IoT 제품은 현장 접근이 어렵기 때문에 Watchdog, Network Reconnect, Modem Reset, State Machine, FOTA 등으로 예상치 못한 장애 후에도 장치가 정상 상태로 복귀하도록 설계합니다.',
    },
    {
      title: '재사용할 수 없는 코드는 장기적인 비용이라고 생각합니다.',
      body: '공통 영역은 Interface와 Base Class로 분리하고, 제품별 차이는 파생 클래스와 비즈니스 로직에 한정합니다. 실제 프로젝트에서 70% 이상 재사용, 신규 포팅 4일 완료 경험이 있습니다.',
    },
    {
      title: '양산과 현장 작업까지 고려합니다.',
      body: 'Plug & Play 초기화, Bootstrap, FOTA, Watchdog 등으로 수십·수백 대 설치 시 초기 설정·장애 복구·펌웨어 업데이트·설정 관리를 자동화합니다. 개발 완료가 아닌 운영까지가 펌웨어의 완성 시점입니다.',
    },
  ],
  education: {
    school: '조선대학교 컴퓨터공학과',
    detail: '2015.03 — 2021.02',
  },
  certifications: [
    '정보처리기사',
    'SW개발_L3',
    '네트워크관리사 2급',
    '컴퓨터활용능력 2급',
    '멋쟁이사자처럼 대학 7기',
  ],
} as const;
