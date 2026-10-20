export const profile = {
  name: '김정석',
  nameEn: 'Kim Jeong-seok',
  role: 'Embedded Firmware Engineer',
  headline: '다섯 번의 공공조명 프로젝트, 목표는 하나입니다.',
  headlineAccent: '무인화 시스템.',
  tagline:
    'STM32 기반 IoT — 스마트 공공조명, 환경 센서, 원격 제어, 독립형 태양광 시스템',
  years: '경력 4년+',
  summary:
    'STM32F4로 공공조명 제품의 펌웨어를 만듭니다. 서산에서는 멈추던 장비를 다시 설계해 Hard Fault를 약 75% 줄였고, 자동 서버 연결도 이때 처음 넣었습니다. 양주에서는 이 구조를 다듬어, 가전제품처럼 전원만 연결하면 설치가 끝나는 제품을 만들었습니다. 다음 프로젝트에서 무인화 시스템을 완성하려 합니다.',
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
      products: '스마트 공공조명 · 환경 센서 · 독립형 태양광 · e-IoT 플랫폼',
      bullets: [
        'STM32·ESP32 기반 스마트 공공조명·환경 센서·독립형 태양광 IoT 제품 펌웨어 설계·개발',
        'OOP 기반 아키텍처로 드라이버와 비즈니스 로직을 분리, Zephyr OS → FreeRTOS 전환 시 비즈니스 로직 변경 없이 OS 계층만 교체해 포팅 6일·안정화 2주',
        'LTE Cat.M1(Quectel BG95)·LwM2M 원격 통신을 추가해 LoRaWAN 중심 제품군 확장',
        '서산: 2차년도 재설계로 Hard Fault 발생 건수 1차년도 대비 약 75% 감소, Watchdog 적용으로 남은 장애도 현장 방문 없이 복구',
        '서산: LoRa 모듈 커스텀 펌웨어를 제조사 순정 펌웨어 + AT 커맨드 구조로 전환해 Join 시간 최대 20분 → 3분 이내',
        '양주: RRC IDLE 페이징 지연을 QENG 계측으로 찾아 7초 CoAP Ping keep-alive·PSM 해제로 해결, 원격 응답 10~20초 → 평균 약 2초',
        '양주: Plug & Play 설치 구조와 LwM2M FOTA로 개발자는 첫 설치·최종 점검 때만 현장 방문, 펌웨어 업데이트는 원격 배포',
        'UART, SPI, I2C, RS-485 기반 센서·통신 모듈 드라이버 개발',
        '양주도시공사·서산시 납품, 우즈베키스탄 해외 실증 현장 구축·기술 지원',
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
        'RTOS 포팅 6일 (비즈니스 로직 무변경)',
      ],
    },
    {
      group: 'Network / IoT',
      items: [
        'LoRaWAN — Join 최적화·다운링크 충돌 방지·예외 처리',
        'LTE Cat.M1 — Quectel BG95, AT Command, PPP, RRC·PSM 상태 관리',
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
        'VCDIFF Delta Update · A/B Slot Update',
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
      title: '증상이 아니라 근본 원인을 찾습니다.',
      body: 'Application → RTOS → Driver → Protocol → Modem → Sensor → PCB → Network까지 범위를 확장하며 원인을 단계적으로 좁힙니다. 센서 오차의 원인이 케이스 내부 발열이었던 일, OS 포팅 중 PCB의 Clock 결함을 찾아낸 일이 대표적입니다.',
    },
    {
      title: '장애가 발생해도 스스로 복구할 수 있는 시스템을 설계합니다.',
      body: '원격 IoT 제품은 현장 접근이 어렵기 때문에 Watchdog, Network Reconnect, Modem Reset, State Machine, FOTA 등으로 예상치 못한 장애 후에도 장치가 정상 상태로 복귀하도록 설계합니다.',
    },
    {
      title: '재사용할 수 없는 코드는 장기적인 비용이라고 생각합니다.',
      body: '공통 영역은 Interface와 Base Class로 분리하고, 제품별 차이는 파생 클래스와 비즈니스 로직에 한정합니다. Zephyr에서 FreeRTOS로 옮길 때도 비즈니스 로직은 그대로 두고 OS 계층만 바꿔 포팅 6일과 안정화 2주 만에 전환을 마쳤습니다.',
    },
    {
      title: '양산과 현장 작업까지 고려합니다.',
      body: 'Plug & Play 초기화, Bootstrap, FOTA, Watchdog 등으로 수십·수백 대를 설치할 때 필요한 초기 설정, 장애 복구, 펌웨어 업데이트를 자동화합니다. 펌웨어는 개발이 끝났을 때가 아니라 현장에서 안정적으로 돌아갈 때 완성된다고 생각합니다.',
    },
  ],
  education: {
    school: '조선대학교 컴퓨터공학과',
    detail: '2015.03 — 2021.02',
    activity: {
      name: '멋쟁이사자처럼 대학 7기',
      detail: 'Django 웹 프로젝트 · 2019',
    },
  },
  certifications: [
    '정보처리기사',
    'SW개발 L3',
    '네트워크관리사 2급',
    '컴퓨터활용능력 2급',
  ],
} as const;
