export const experiences = {
  title: 'Experience',
  oneLiner: '펌웨어 개발 외에도 개발 환경, 시스템 이해, 현장 대응을 위한 습관을 쌓아왔습니다.',
  items: [
    {
      slug: 'cross-platform',
      title: 'Cross-platform 개발 환경 구축',
      summary:
        'macOS, Windows, Linux에서 동일하게 빌드·업로드할 수 있는 환경을 VS Code, PlatformIO, CMake로 구성합니다.',
      points: [
        '개발 환경이 특정 OS나 IDE에 종속되지 않도록 워크플로우 설계',
        'PlatformIO·CMake 기반 크로스 플랫폼 빌드 파이프라인',
        '팀원 환경과 무관하게 동일한 결과물을 만드는 프로세스 개선',
      ],
    },
    {
      slug: 'system-observation',
      title: '실제 시스템을 관찰하며 제어 기술 이해',
      summary:
        '차량·IoT 제품의 제어 동작을 개발자 시각으로 관찰하며, 입력→상태→출력 흐름과 장애 복구 방식에서 설계 아이디어를 찾습니다.',
      points: [
        '입력값 처리와 상태 전이, 출력까지의 제어 흐름 분석',
        '장애 발생 시 시스템 복구 메커니즘 관찰·적용',
        '사용자 관점을 넘어 제품 설계에 반영할 인사이트 수집',
      ],
    },
    {
      slug: 'fitness',
      title: '꾸준한 체력 관리',
      summary:
        '장시간 디버깅·현장 구축에서도 집중력을 유지하기 위해 꾸준히 운동하며, 여름에는 서핑으로 체력을 관리합니다.',
      points: [
        '장시간 디버깅·현장 업무에 필요한 지속적 집중력 유지',
        '업무 외 시간에도 꾸준한 체력 관리 습관',
      ],
    },
  ],
} as const;
