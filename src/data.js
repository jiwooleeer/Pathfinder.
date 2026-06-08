export const departments = [
  '시각디자인학과',
  '공업디자인학과',
  '공간디자인학과',
  '의상디자인학과',
  '영상디자인학과',
  '금속공예학과',
  '도자공예학과',
  '자동차운송디자인학과',
  'AI디자인학과',
].map((name, index) => ({
  id: `dept-${index + 1}`,
  name,
  description: `${name} 전과를 준비한 학생들의 실제 후기와 합격 자료를 모아둔 공간입니다.`,
  insight:
    [
      {
        focus: '포트폴리오 설명',
        context: '최근 후기에서 자주 언급된 내용',
        summary: '최근 후기에서는 학점 자체보다 포트폴리오를 어떤 순서로 구성했고, 각 작업 의도를 어떻게 설명했는지에 대한 이야기가 반복해서 나옵니다.',
        opinions: ['작업 의도를 설명하는 질문이 많았음', '포트폴리오 순서를 중요하게 보는 경우가 많았음', '지원동기보다 작업 설명 질문 비중이 높았음'],
        points: ['포트폴리오설명', '작업의도', '면접', '구성순서'],
      },
      {
        focus: '문제 해결 과정',
        context: '최근 후기에서 자주 언급된 내용',
        summary: '최근 후기에서는 결과물의 완성도만큼이나 문제를 어떻게 발견했고, 어떤 기준으로 해결 과정을 정리했는지가 자주 언급됩니다.',
        opinions: ['제품 사고 과정을 설명하는 질문이 많았음', '완성 결과보다 작업 논리를 물어본 경우가 있었음', '포트폴리오 순서를 다시 정리한 경험이 자주 나왔음'],
        points: ['문제해결', '프로세스', '제품스케치', '작업논리'],
      },
      {
        focus: '공간 구성 논리',
        context: '최근 후기에서 자주 언급된 내용',
        summary: '최근 후기에서는 컨셉을 공간 구조로 풀어내는 방식과 발표 흐름을 미리 정리해둔 것이 도움이 됐다는 이야기가 많습니다.',
        opinions: ['공간 사고 과정을 설명하는 질문이 나왔음', '모형 자체보다 컨셉 설명을 중요하게 느낀 사례가 있었음', '작업 흐름을 말로 정리하는 연습이 필요하다는 의견이 많았음'],
        points: ['공간구성', '컨셉', '발표', '포트폴리오'],
      },
    ][index % 3],
  keywords: [
    ['포트폴리오', '타이포그래피', '면접', '학점', '관찰드로잉'],
    ['제품스케치', '문제해결', '실기', '면접', '프로세스'],
    ['공간구성', '모형', '포트폴리오', '컨셉', '발표'],
    ['작업노트', '브랜드', '자기소개서', '면접', '소재'],
  ][index % 4],
}));


export const currentDepartmentGroups = [
  {
    college: '글로벌인문지역대학',
    majors: ['한국어문학부', '국어국문학과', '영어영문학부', '중국학부', '한국역사학과', '유라시아학과', '일본학과'],
  },
  {
    college: '사회과학대학',
    majors: ['행정정책학부', '정치외교학과', '사회학과', '언론정보학부', '미디어전공', '광고홍보학과'],
  },
  {
    college: '법과대학',
    majors: ['법학부'],
  },
  {
    college: '경상대학',
    majors: ['경제학과', '국제통상학과'],
  },
  {
    college: '경영대학',
    majors: ['경영학부', '경영정보학부', 'KMU International Business School', '파이낸스·회계학부'],
  },
  {
    college: '창의공과대학',
    majors: ['신소재공학부', '기계공학부', '건설시스템공학부', '전자공학부'],
  },
  {
    college: '소프트웨어융합대학',
    majors: ['소프트웨어학부'],
  },
  {
    college: '자동차융합대학',
    majors: ['자동차공학과', '자동차IT융합학과'],
  },
  {
    college: '과학기술대학',
    majors: ['산림환경시스템학과', '임산생명공학과', '나노전자물리학과', '응용화학과', '정보보안암호수학과', '식품영양학과', '바이오발효융합학과'],
  },
  {
    college: '건축대학',
    majors: ['건축학부'],
  },
  {
    college: '조형대학',
    majors: ['공업디자인학과', '시각디자인학과', '금속공예학과', '도자공예학과', '의상디자인학과', '공간디자인학과', '영상디자인학과', '자동차운송디자인학과', 'AI디자인학과'],
  },
  {
    college: '예술대학',
    majors: ['음악학부', '미술학부', '회화전공', '입체미술전공', '공연예술학부', '연극전공', '영화전공', '무용전공'],
  },
  {
    college: '체육대학',
    majors: ['체육학부', '스포츠교육전공', '스포츠산업·레저전공', '스포츠건강재활전공'],
  },
];

const tags = [
  ['면접후기', '포트폴리오준비', '결과통보'],
  ['실기경험', '면접후기', '자기소개서'],
  ['개별통보', '결과통보', '면접후기'],
  ['포트폴리오준비', '자기소개서', '면접후기'],
  ['실기경험', '포트폴리오준비', '합격후기'],
];

const fromMajors = [
  '경영학부',
  '시각디자인학과',
  '국어국문학과',
  '공업디자인학과',
  '소프트웨어학부',
  '의상디자인학과',
  '건축학부',
  '미디어전공',
  '공간디자인학과',
  '기계공학부',
];

const semesters = ['2025학년도 2학기', '2025학년도 1학기', '2024학년도 2학기'];

function shortSemester(semester) {
  if (semester.includes('2025') && semester.includes('2학기')) return '25-2';
  if (semester.includes('2025') && semester.includes('1학기')) return '25-1';
  if (semester.includes('2024') && semester.includes('2학기')) return '24-2';
  return semester;
}

const reviewTitleMap = {
  시각디자인학과: [
    '시디과 면접장 생각보다 조용해서 더 떨렸음',
    '포폴 순서 바꾼 게 진짜 컸던 듯',
    '시디과 준비하면 이건 꼭 챙기세요',
    '면접 끝나고 바로 적어둔 시디과 후기',
  ],
  공업디자인학과: [
    '공디 면접은 진짜 예상이 안 됨',
    '교수님이 포폴보다 이걸 더 물어보셨어요',
    '학점 낮아서 포기했는데 붙었습니다',
    '공디 준비하면서 제일 도움됐던 자료들',
  ],
  공간디자인학과: [
    '공간디자인 준비하면서 제일 막혔던 부분',
    'ON국민 공지만 보고 준비했다가 놓친 것들',
    '면접에서 생각보다 실무 얘기가 많이 나왔어요',
    '공간디자인 포폴 구성 이렇게 바꿨습니다',
  ],
  의상디자인학과: [
    '의상디자인 면접에서 작업 의도를 계속 물어봤어요',
    '포폴보다 컨셉 설명이 더 중요했던 느낌',
    '의상 준비하면서 자소서 제일 많이 고쳤습니다',
  ],
};

const commonReviewTitles = [
  '전과 준비하면서 가장 많이 한 실수',
  '붙고 나서 보니까 괜히 걱정했던 것들',
  '면접 들어가기 전에 이건 알고 가세요',
  '결과 발표까지 버틴 방법',
  '혼자 준비하면서 제일 답답했던 부분 정리',
  '합격하고 나서 다시 보면 보이는 것들',
  '학점보다 설명을 더 많이 물어봤어요',
  '개별 연락 기다리면서 헷갈렸던 것들',
];

const reviewSummaries = [
  '면접 들어가기 전까지는 질문이 엄청 날카로울 줄 알았는데, 막상 들어가니 분위기가 너무 조용해서 더 긴장됐어요. 포폴 설명은 길게 외우기보다 왜 이 작업을 했는지 짧게 말하는 연습이 더 도움됐습니다.',
  '처음엔 공지에 나온 것만 보고 준비했는데 막상 후기들을 찾아보니 포폴 설명 방식이 훨씬 중요하더라고요. 작업 순서를 다시 정리하고, 각 작업마다 왜 만들었는지 말로 풀어보는 연습을 많이 했습니다.',
  '생각보다 학점 얘기는 짧게 지나갔고 작업 과정 질문이 더 많았습니다. 완성본만 보여주기보다 중간에 어떤 선택을 했는지 정리해둔 게 면접에서 도움이 됐어요.',
  '개별 연락이 언제 오는지 몰라서 제일 불안했습니다. 준비 자체보다 기다리는 시간이 힘들었고, 면접 직후 기억나는 질문을 바로 적어둔 게 나중에 정리할 때 좋았습니다.',
  '자소서를 거창하게 쓰려고 하니까 오히려 말이 안 잡혔어요. 제가 들었던 수업, 해봤던 작업, 옮기고 싶은 이유를 연결해서 쓰는 쪽이 훨씬 자연스러웠습니다.',
];

function reviewTitleFor(department, index) {
  const titles = reviewTitleMap[department] ?? commonReviewTitles;
  return titles[index % titles.length];
}

const portfolioTitles = [
  '실제 제출했던 시디과 합격 포폴 18p',
  '면접 질문까지 정리한 시디과 합격 포트폴리오',
  '포폴 순서가 중요했던 이유까지 정리한 자료',
  '교수님 피드백 받고 수정한 최종 제출본',
  '비전공자가 시디과 붙을 때 쓴 포트폴리오',
  '공디 붙은 포폴 16p 전부 공개',
  '면접에서 칭찬받은 제품 작업 포함',
  '공디 포트폴리오 구성 흐름 정리본',
  '학점 낮아도 설득력 있었던 포폴 구성',
  '공간디자인 합격 포폴 구성 순서 정리',
  '면접 질문 복기 포함한 공간디자인 포폴',
  '실제 제출본 + 작업 설명 스크립트',
];

const statementTitles = [
  '지원동기 문단을 끝까지 고친 자소서 초안/최종본',
  '학업계획을 전공 수업이랑 연결한 자기소개서',
  '비전공자가 설득력 있게 쓴 전과 자소서',
  '면접 답변까지 같이 준비한 자기소개서 자료',
  '교수님 질문 대비용으로 정리한 자소서 흐름',
  '지원 이유가 약할 때 참고하기 좋은 자기소개서',
  '작업 경험을 학업계획으로 바꾼 자소서 정리본',
  '실제 제출한 자기소개서와 수정 메모',
];

const examTitles = [
  '실기 준비할 때 봤던 연습 범위 정리',
  '시험 전날까지 확인한 체크리스트',
  '시간 안에 작업 정리하는 연습 자료',
  '실기에서 놓치기 쉬운 조건 정리본',
  '시험 준비 방향 잡는 데 도움된 메모',
];

const interviewTitles = [
  '면접 질문 32개와 답변 키워드 정리',
  '실제로 받은 질문 + 꼬리질문 복기',
  '포트폴리오 기반 면접 질문 모음',
  '면접 직전에 봤던 질문 체크리스트',
  '지원동기 답변 막힐 때 참고한 질문 자료',
];

function resourceTitleFor(type, index) {
  if (type === '포트폴리오') return portfolioTitles[index % portfolioTitles.length];
  if (type === '자기소개서') return statementTitles[index % statementTitles.length];
  if (type === '시험 자료') return examTitles[index % examTitles.length];
  return interviewTitles[index % interviewTitles.length];
}

function resourceDescriptionFor(type) {
  if (type === '포트폴리오') {
    return '실제 제출했던 포트폴리오 순서와 작업별 설명 방식을 같이 정리했습니다. 면접에서 어떤 작업을 물어봤는지도 적어두어서, 포폴을 어떻게 말로 풀어야 할지 감 잡는 데 도움이 될 거예요.';
  }
  if (type === '자기소개서') {
    return '처음 쓴 문장과 최종 제출 문장을 함께 정리했습니다. 지원동기, 전공 적합성, 앞으로 듣고 싶은 수업을 어떻게 연결했는지 비교하면서 볼 수 있어요.';
  }
  if (type === '시험 자료') {
    return '실기나 시험 준비 때 실제로 정리했던 범위와 연습 방식을 묶었습니다. 어디까지 준비해야 할지 막막한 사람에게 기준점을 잡아주는 자료입니다.';
  }
  return '면접에서 실제로 받았던 질문과 답변 키워드를 정리했습니다. 포트폴리오 기반 꼬리질문까지 같이 적어두어서 면접 전 점검용으로 보기 좋습니다.';
}

function bodyFor(department, fromMajor, result, tagSet) {
  const passed = result === '합격';
  return [
    `처음 ${department} 전과를 생각했을 때 제일 막막했던 건 어디까지 준비해야 하는지 감이 없었다는 점이었어요. ON국민에서 신청 경로랑 공지 자체는 찾을 수 있었는데, 실제 면접 분위기나 포트폴리오를 어떤 식으로 설명해야 하는지는 거의 알기 어려웠습니다. 저는 원래 ${fromMajor} 소속이라 조형대 수업 분위기도 정확히 몰랐고, 주변에 같은 학과로 전과한 선배도 없어서 에브리타임 글이랑 블로그 후기를 계속 찾아봤습니다.`,
    `준비는 먼저 제가 왜 이 학과로 옮기고 싶은지 정리하는 것부터 했어요. 처음에는 작품 개수를 늘리는 데만 신경 썼는데, 나중에는 교수님이 궁금해할 만한 흐름을 만드는 게 더 중요하다고 느꼈습니다. 포트폴리오는 완성작만 나열하기보다 문제를 발견한 과정, 시안을 바꾼 이유, 최종 결과에서 아쉬웠던 점까지 짧게 붙였습니다. 자기소개서도 대단한 문장보다 제가 실제로 어떤 수업을 들었고 어떤 작업을 이어가고 싶은지를 중심으로 썼습니다.`,
    tagSet.includes('면접후기')
      ? `면접은 생각보다 오래 걸리지는 않았습니다. 제 경우 체감상 8분에서 10분 정도였고 교수님은 여러 분이 계셨습니다. 분위기는 압박면접이라기보다 정말 이 학과에서 계속 공부할 준비가 되어 있는지 확인하는 느낌이었어요. 기억나는 질문은 "왜 지금 전과를 하려고 하나요?", "이 작업에서 본인이 가장 많이 고민한 부분은 무엇인가요?", "전공 수업을 따라가기 위해 어떤 준비를 했나요?" 정도였습니다. 답을 외워갔다기보다 키워드만 적어두고 자연스럽게 말하려고 했던 게 도움이 됐습니다.`
      : `제일 불안했던 부분은 공식 공지에 적힌 내용과 실제 진행 방식 사이의 빈칸이었어요. 별도 안내가 늦게 오는 편이라 신청 후에는 학과 사무실 공지와 포털 알림을 계속 확인했습니다. 단과대나 학과에서 개별 연락이 오는 방식은 사람마다 다르게 느낄 수 있어서, 무조건 한 방식으로만 온다고 생각하지 않는 게 좋을 것 같습니다.`,
    tagSet.includes('실기경험')
      ? `실기 관련해서는 시험 자체보다 그 전에 어떤 식으로 준비해야 하는지가 더 어려웠습니다. 저는 기출처럼 딱 떨어지는 자료를 찾기보다는 평소 작업을 제한 시간 안에 설명하고 정리하는 연습을 했습니다. 시험장에서 완벽한 결과물을 만들겠다는 생각보다, 주어진 조건을 어떻게 해석했는지 보여주는 게 중요하다고 느꼈습니다.`
      : `결과 발표를 기다릴 때는 포털 상태가 바로바로 바뀌지 않는 것 같아서 계속 새로고침을 했습니다. 주변에서 개별 통보를 먼저 받았다는 얘기를 들으면 괜히 더 불안해지는데, 학과나 단과대마다 안내 방식이 다를 수 있으니 공식 확인을 끝까지 하는 게 맞습니다.`,
    passed
      ? `결과적으로 저는 ${department} 전과에 합격했지만, 준비하면서 제일 크게 느낀 건 "자료가 조금만 더 모여 있었으면 덜 불안했겠다"는 점이었습니다. 다음 지원자에게 말하고 싶은 건, 공식 공지는 반드시 확인하되 실제 준비는 후기들을 여러 개 읽으면서 공통적으로 나오는 질문과 분위기를 파악하라는 거예요. 그리고 포트폴리오는 예쁘게 만드는 것도 중요하지만, 본인이 말로 설명할 수 있는 작업으로 구성하는 게 훨씬 중요했습니다.`
      : `저는 결과가 좋지는 않았지만, 막연하게 준비했던 부분이 많았다는 걸 알게 됐습니다. 다음에 다시 지원한다면 포트폴리오를 더 많이 넣기보다 왜 이 작업을 했는지, 이 학과에서 무엇을 배우고 싶은지 더 명확히 정리할 것 같아요. 떨어진 후기도 누군가에게는 꽤 현실적인 참고가 될 수 있을 것 같아서 남깁니다.`,
  ];
}

export const reviews = Array.from({ length: 30 }, (_, index) => {
  const department = departments[index % departments.length];
  const tagSet = tags[index % tags.length];
  const result = index % 7 === 6 ? '불합격' : '합격';
  const fromMajor = fromMajors[index % fromMajors.length];

  return {
    id: `review-${index + 1}`,
    title: reviewTitleFor(department.name, index),
    nickname: `익명${String(index + 17).padStart(2, '0')}`,
    fromMajor,
    toDepartment: department.name,
    departmentId: department.id,
    semester: semesters[index % semesters.length],
    shortSemester: shortSemester(semesters[index % semesters.length]),
    result,
    summary: reviewSummaries[index % reviewSummaries.length],
    tags: tagSet,
    views: 1200 - index * 23,
    likes: 84 - (index % 12) * 3,
    helpful: 96 - (index % 14) * 4,
    saves: 42 - (index % 9) * 2,
    gpaRange: ['3.8', '3.5', '4.0', '3.2', '3.6'][index % 5],
    body: bodyFor(department.name, fromMajor, result, tagSet),
  };
});

const resourceTypes = [
  { type: '포트폴리오', count: 12, price: 9900 },
  { type: '자기소개서', count: 8, price: 4900 },
  { type: '시험 자료', count: 5, price: 3900 },
  { type: '면접 질문 모음', count: 5, price: 2900 },
];

export const resources = resourceTypes.flatMap((resourceType, typeIndex) =>
  Array.from({ length: resourceType.count }, (_, localIndex) => {
    const globalIndex = typeIndex * 12 + localIndex;
    const department = departments[(globalIndex + typeIndex) % departments.length];
    const fromMajor = fromMajors[(globalIndex + 3) % fromMajors.length];

    return {
      id: `resource-${resourceType.type}-${localIndex + 1}`,
      title: resourceTitleFor(resourceType.type, globalIndex),
      type: resourceType.type,
      price: resourceType.price,
      seller: `익명판매자${localIndex + typeIndex + 1}`,
      fromMajor,
      toDepartment: department.name,
      departmentId: department.id,
      semester: semesters[(localIndex + typeIndex) % semesters.length],
      shortSemester: shortSemester(semesters[(localIndex + typeIndex) % semesters.length]),
      result: '합격',
      reviewCount: 7 + ((localIndex + typeIndex) % 9),
      rating: (4.6 + ((localIndex + typeIndex) % 4) * 0.1).toFixed(1),
      views: 840 - globalIndex * 11,
      saves: 56 - ((localIndex + typeIndex) % 10) * 3,
      gpa: ['3.8', '3.6', '4.1', '3.4'][globalIndex % 4],
      majorStatus: globalIndex % 3 === 0 ? '비전공' : '전공',
      pageCount: resourceType.type === '포트폴리오' ? 16 + (localIndex % 5) * 2 : undefined,
      keywords:
        resourceType.type === '포트폴리오'
          ? ['포트폴리오', '합격', department.name.replace('학과', '')]
          : resourceType.type === '자기소개서'
            ? ['자소서', '지원동기', department.name.replace('학과', '')]
            : resourceType.type === '시험 자료'
              ? ['시험자료', '실기', department.name.replace('학과', '')]
              : ['면접자료', '질문모음', department.name.replace('학과', '')],
      description: resourceDescriptionFor(resourceType.type),
      includes:
        resourceType.type === '포트폴리오'
          ? ['포트폴리오 구성 흐름', '작업 설명 방식', '면접 질문 연결 메모', '표지/목차 구성 예시']
          : resourceType.type === '자기소개서'
            ? ['지원 동기 문단', '전공 적합성 정리', '학업 계획 흐름', '문장 수정 전후 메모']
            : resourceType.type === '시험 자료'
              ? ['준비 범위 정리', '연습 문제 메모', '시간 배분 방식', '시험 당일 체크리스트']
              : ['기억나는 질문 목록', '답변 키워드', '꼬리질문 대비', '면접 직전 체크리스트'],
      purchaseReviews: [
        {
          nickname: '익명구매자',
          rating: 5,
          text: '어떤 순서로 준비해야 할지 감이 잡혔어요.',
        },
        {
          nickname: '익명24',
          rating: 4,
          text: '면접 질문이랑 연결해서 볼 수 있어서 좋았습니다.',
        },
      ],
    };
  }),
);
