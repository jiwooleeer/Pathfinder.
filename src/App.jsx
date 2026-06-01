import React, { useEffect, useMemo, useState } from 'react';
import {
  BookmarkSimple,
  ChartBar,
  ChatCircleText,
  EnvelopeSimple,
  Eye,
  FileText,
  Gift,
  Heart,
  House,
  PencilSimpleLine,
  ShieldCheck,
  ShoppingBagOpen,
  UsersThree,
} from '@phosphor-icons/react';
import { departments, resources, reviews } from './data';

const tabs = [
  { key: 'home', label: '홈', Icon: House },
  { key: 'reviews', label: '후기', Icon: ChatCircleText },
  { key: 'resources', label: '자료', Icon: FileText },
  { key: 'write', label: '작성', Icon: PencilSimpleLine },
];

function formatPrice(price) {
  return `${price.toLocaleString('ko-KR')}원`;
}

function isImportantLabel(label) {
  return ['합격', '면접후기', '포트폴리오준비', '포트폴리오'].some((keyword) =>
    label.includes(keyword),
  );
}

function sortItems(items, sort) {
  const list = [...items];
  if (sort === '최신순') return list.reverse();
  if (sort === '도움순') return list.sort((a, b) => (b.helpful ?? b.likes ?? 0) - (a.helpful ?? a.likes ?? 0));
  if (sort === '저장순') return list.sort((a, b) => (b.saves ?? 0) - (a.saves ?? 0));
  return list.sort((a, b) => (b.views ?? 0) - (a.views ?? 0));
}

function compactDepartmentName(name) {
  const shortNames = {
    시각디자인학과: '시각',
    공업디자인학과: '공업',
    공간디자인학과: '공간',
    의상디자인학과: '의상',
    영상디자인학과: '영상',
    금속공예학과: '금속',
    도자공예학과: '도자',
    자동차운송디자인학과: '자동차',
    AI디자인학과: 'AI',
  };

  return shortNames[name] ?? name.replace('학과', '');
}

function departmentBadgeName(name) {
  return name
    .replace('디자인학과', '디자인')
    .replace('공예학과', '공예')
    .replace('자동차운송디자인학과', '자동차운송')
    .replace('AI디자인학과', 'AI디자인');
}

function OfficialNoticeCard() {
  return (
    <article className="notice-card">
      <p className="eyebrow">공식 공지 확인 필요</p>
      <h3>최신 전형 정보는 학교 공지에서 확인하세요.</h3>
      <p>
        공식 전형 정보는 반드시 ON국민 및 국민대학교 학사공지에서 최신 공지를
        확인해야 합니다. 학과별 선발방법, 면접/실기 여부, 정원은 매 학기 달라질
        수 있습니다.
      </p>
      <p className="notice-small">
        신청 흐름 예시: ON국민포털 → 포털 → 학사서비스 → 전공(변경)신청 →
        전부(과)신청
      </p>
    </article>
  );
}

function Header({ page, setPage }) {
  return (
    <header className="topbar">
      <button className="brand" onClick={() => setPage({ name: 'home' })}>
        Pathfinder.
      </button>
      <nav className="desktop-nav">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            className={page.name === tab.key ? 'active' : ''}
            onClick={() => setPage({ name: tab.key })}
          >
            <tab.Icon size={17} weight="regular" />
            {tab.label}
          </button>
        ))}
      </nav>
    </header>
  );
}

function BottomNav({ page, setPage }) {
  return (
    <nav className="bottom-nav">
      {tabs.map((tab) => (
        <button
          key={tab.key}
          className={page.name === tab.key ? 'active' : ''}
          onClick={() => setPage({ name: tab.key })}
        >
          <tab.Icon size={20} weight="regular" />
          <span>{tab.label}</span>
        </button>
      ))}
    </nav>
  );
}

function HomePage({ setPage }) {
  const [selectedDepartmentId, setSelectedDepartmentId] = useState(departments[0].id);
  const selectedDepartment = departments.find((department) => department.id === selectedDepartmentId) ?? departments[0];
  const selectedReviews = reviews.filter((review) => review.departmentId === selectedDepartmentId);
  const selectedPortfolios = resources.filter(
    (resource) => resource.departmentId === selectedDepartmentId && resource.type === '포트폴리오',
  );
  const homePortfolios = [
    ...selectedPortfolios,
    ...resources.filter(
      (resource) => resource.type === '포트폴리오' && resource.departmentId !== selectedDepartmentId,
    ),
  ];

  return (
    <main className="page home-page">
      <section className="hero">
        <h1>
          조형대 전과,
          <br />
          혼자 준비하지 마세요.
        </h1>
        <p>
          실제 합격자들의 후기, 포트폴리오, 면접 자료를 통해 내가 무엇을
          준비해야 하는지 확인하세요.
        </p>
      </section>

      <section className="interest-control">
        <label htmlFor="interest-department">관심 학과</label>
        <div className="interest-select-row">
          <select
            id="interest-department"
            value={selectedDepartmentId}
            onChange={(event) => setSelectedDepartmentId(event.target.value)}
          >
            {departments.map((department) => (
              <option key={department.id} value={department.id}>
                {department.name}
              </option>
            ))}
          </select>
          <button onClick={() => setPage({ name: 'department', id: selectedDepartment.id })}>
            학과 보기
          </button>
        </div>
      </section>

      <ReviewPreviewSection
        title="지금 가장 도움된 후기"
        items={sortItems(selectedReviews, '도움순').slice(0, 3)}
        setPage={setPage}
        featured
        teaser
        viewAllPage={{ name: 'reviews', departmentId: selectedDepartmentId }}
      />
      <ResourcePreviewSection
        title="합격 포트폴리오"
        items={sortItems(homePortfolios, '저장순').slice(0, 3)}
        setPage={setPage}
        featured
        teaser
        viewAllPage={{ name: 'resources', departmentId: selectedDepartmentId, resourceType: '포트폴리오' }}
      />
      <section className="section">
        <div className="section-head">
          <h2>서비스 통계</h2>
        </div>
        <div className="metric-grid">
          <div>
            <ChatCircleText size={18} weight="regular" />
            <strong>실제 후기</strong>
            <span>30+</span>
          </div>
          <div>
            <FileText size={18} weight="regular" />
            <strong>합격 포트폴리오</strong>
            <span>12+</span>
          </div>
          <div>
            <ChartBar size={18} weight="regular" />
            <strong>면접 자료</strong>
            <span>5+</span>
          </div>
          <div>
            <UsersThree size={18} weight="regular" />
            <strong>참여자</strong>
            <span>47+</span>
          </div>
        </div>
      </section>
    </main>
  );
}

function DepartmentPage({ id, setPage }) {
  const department = departments.find((item) => item.id === id) ?? departments[0];
  const departmentReviews = reviews.filter((review) => review.departmentId === department.id);
  const departmentResources = resources.filter((resource) => resource.departmentId === department.id);
  const portfolioResources = departmentResources.filter((resource) => resource.type === '포트폴리오');
  const interviewReviews = departmentReviews.filter((review) => review.tags.some((tag) => tag.includes('면접')));
  const interviewResources = departmentResources.filter((resource) => resource.type.includes('면접'));

  return (
    <main className="page">
      <button className="back-button" onClick={() => setPage({ name: 'home' })}>
        ← 홈
      </button>
      <section className="detail-hero">
        <p className="eyebrow">학과</p>
        <h1>{department.name}</h1>
        <p>{department.description}</p>
        <div className="summary-row">
          <div>
            <span>후기</span>
            <strong>{departmentReviews.length}개</strong>
          </div>
          <div>
            <span>판매 자료</span>
            <strong>{departmentResources.length}개</strong>
          </div>
          <div>
            <span>합격 포트폴리오</span>
            <strong>{portfolioResources.length}개</strong>
          </div>
          <div>
            <span>면접 후기</span>
            <strong>{interviewReviews.length}개</strong>
          </div>
        </div>
        <div className="cta-row">
          <button onClick={() => setPage({ name: 'reviews', departmentId: department.id })}>
            후기 보기
          </button>
          <button className="secondary" onClick={() => setPage({ name: 'resources', departmentId: department.id })}>
            자료 보기
          </button>
        </div>
      </section>

      <section className="section">
        <div className="section-head">
          <h2>AI 인사이트</h2>
        </div>
        <AIInsightCard insight={department.insight} />
      </section>
      <section className="section">
        <div className="section-head">
          <h2>많이 언급된 키워드</h2>
        </div>
        <div className="tag-row keyword-row">
          {department.keywords.map((keyword) => (
            <span key={keyword} className={isImportantLabel(keyword) ? 'is-important' : ''}>{keyword}</span>
          ))}
        </div>
      </section>
      <ReviewPreviewSection title="최근 합격 후기" items={departmentReviews.filter((review) => review.result === '합격').slice(0, 4)} setPage={setPage} />
      <ResourcePreviewSection title="합격 포트폴리오" items={portfolioResources.slice(0, 4)} setPage={setPage} />
      <ResourcePreviewSection title="면접 자료" items={interviewResources.slice(0, 4)} setPage={setPage} />
      <OfficialNoticeCard />
    </main>
  );
}

function AIInsightCard({ insight }) {
  return (
    <article className="insight-card">
      <div className="insight-top">
        <div>
          <span>중요도 높음</span>
          <strong>{insight.focus}</strong>
        </div>
        <div>
          <span>후기 언급 빈도</span>
          <strong className="accent-text">{insight.frequency}</strong>
        </div>
      </div>
      <p>{insight.summary}</p>
      <div className="insight-divider" />
      <div className="insight-list">
        <span>후기에서 자주 나온 의견</span>
        <ul>
          {insight.opinions.map((opinion) => (
            <li key={opinion}>{opinion}</li>
          ))}
        </ul>
      </div>
      <div className="insight-divider" />
      <div className="tag-row keyword-row compact-keywords">
        {insight.points.map((point) => (
          <span key={point} className="is-important">{point}</span>
        ))}
      </div>
    </article>
  );
}

function ReviewPreviewSection({ title, items, setPage, featured = false, teaser = false, viewAllPage }) {
  return (
    <section className="section">
      <div className="section-head">
        <h2>{title}</h2>
        {!teaser && <button onClick={() => setPage(viewAllPage ?? { name: 'reviews' })}>전체보기</button>}
      </div>
      <TeaserStack teaser={teaser} ctaLabel="전체 후기 보기" onCta={() => setPage(viewAllPage ?? { name: 'reviews' })}>
        <div className={featured ? 'stack stack-featured' : 'stack'}>
          {items.map((review) => (
            <ReviewCard key={review.id} review={review} setPage={setPage} />
          ))}
        </div>
      </TeaserStack>
    </section>
  );
}

function ResourcePreviewSection({ title, items, setPage, featured = false, teaser = false, viewAllPage }) {
  return (
    <section className="section">
      <div className="section-head">
        <h2>{title}</h2>
        {!teaser && <button onClick={() => setPage(viewAllPage ?? { name: 'resources' })}>전체보기</button>}
      </div>
      <TeaserStack teaser={teaser} ctaLabel="전체 자료 보기" onCta={() => setPage(viewAllPage ?? { name: 'resources' })}>
        <div className={featured ? 'stack stack-featured' : 'stack'}>
          {items.map((resource) => (
            <ResourceCard key={resource.id} resource={resource} setPage={setPage} />
          ))}
        </div>
      </TeaserStack>
    </section>
  );
}

function TeaserStack({ teaser, ctaLabel, onCta, children }) {
  if (!teaser) return children;

  return (
    <div className="teaser-frame">
      <div className="teaser-stack">{children}</div>
      <div className="teaser-fade">
        <button onClick={onCta}>{ctaLabel} →</button>
      </div>
    </div>
  );
}

function ReviewCard({ review, setPage }) {
  return (
    <button className="content-card" onClick={() => setPage({ name: 'reviewDetail', id: review.id })}>
      <div className="card-topline">
        <span className="mini-badge is-important">{departmentBadgeName(review.toDepartment)}</span>
      </div>
      <h3>{review.title}</h3>
      <p>{review.summary}</p>
      <p className="condition-line">
        {review.fromMajor} · 학점 {review.gpaRange} · <span className={review.result === '합격' ? 'accent-text' : ''}>{review.result}</span>
      </p>
      <div className="rating-row">
        <span className="meta-icons">
          <Eye size={14} weight="regular" /> {review.views.toLocaleString()}
          <Heart size={14} weight="regular" /> {review.helpful}
          <BookmarkSimple size={14} weight="regular" /> {review.saves}
        </span>
      </div>
    </button>
  );
}

function ReviewListPage({ selectedDepartmentId, selectedResult, setPage }) {
  const [departmentId, setDepartmentId] = useState(selectedDepartmentId ?? 'all');
  const [result, setResult] = useState(selectedResult ?? 'all');
  const [topic, setTopic] = useState('all');
  const [sort, setSort] = useState('인기순');

  useEffect(() => {
    setDepartmentId(selectedDepartmentId ?? 'all');
  }, [selectedDepartmentId]);

  useEffect(() => {
    setResult(selectedResult ?? 'all');
  }, [selectedResult]);

  const filtered = sortItems(reviews.filter((review) => {
    const matchesDepartment = departmentId === 'all' || review.departmentId === departmentId;
    const matchesResult = result === 'all' || review.result === result;
    const matchesTopic = topic === 'all' || review.tags.some((tag) => tag.includes(topic));
    return matchesDepartment && matchesResult && matchesTopic;
  }), sort);

  return (
    <main className="page">
      <PageTitle eyebrow="후기 탐색" title="합격자들은 어떻게 준비했을까요?" />
      <DepartmentSelect value={departmentId} onChange={setDepartmentId} />
      <div className="filter-block">
        <FilterChips items={['all', '합격', '불합격']} value={result} onChange={setResult} allLabel="전체 결과" />
        <FilterChips items={['all', '면접', '포트폴리오', '학점', '자기소개서']} value={topic} onChange={setTopic} allLabel="전체 주제" />
        <FilterChips items={['인기순', '최신순', '도움순', '저장순']} value={sort} onChange={setSort} />
      </div>
      <div className="stack">
        {filtered.map((review) => (
          <ReviewCard key={review.id} review={review} setPage={setPage} />
        ))}
      </div>
    </main>
  );
}

function ReviewDetailPage({ id, setPage }) {
  const review = reviews.find((item) => item.id === id) ?? reviews[0];
  const relatedResources = resources
    .filter((resource) => resource.departmentId === review.departmentId)
    .slice(0, 3);

  return (
    <main className="page">
      <button className="back-button" onClick={() => setPage({ name: 'reviews' })}>
        ← 후기
      </button>
      <article className="article-detail">
        <div className="article-head expanded-card-head">
          <span className="mini-badge is-important">{departmentBadgeName(review.toDepartment)}</span>
          <h1>{review.title}</h1>
          <p className="condition-line">
            {review.fromMajor} · 학점 {review.gpaRange} · <span className={review.result === '합격' ? 'accent-text' : ''}>{review.result}</span>
          </p>
          <p className="detail-meta-line">
            <Eye size={14} weight="regular" /> 조회 {review.views.toLocaleString()}
            <Heart size={14} weight="regular" /> 도움돼요 {review.helpful}
            <BookmarkSimple size={14} weight="regular" /> 저장 {review.saves}
          </p>
        </div>
        <div className="body-copy">
          {review.body.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </article>

      <ResourcePreviewSection title="이 후기에 연결된 자료" items={relatedResources} setPage={setPage} />
    </main>
  );
}

function ResourceCard({ resource, setPage }) {
  return (
    <button className="content-card resource-card" onClick={() => setPage({ name: 'resourceDetail', id: resource.id })}>
      <div className="card-topline">
        <span className="resource-badge">
          <FileText size={13} weight="regular" />
          {departmentBadgeName(resource.toDepartment)}
        </span>
        <strong className="resource-price">{formatPrice(resource.price)}</strong>
      </div>
      <h3>{resource.title}</h3>
      <p>{resource.description}</p>
      <p className="condition-line resource-condition-line">
        학점 {resource.gpa} · {resource.majorStatus}
        {resource.pageCount ? ` · ${resource.pageCount}p` : ''}
      </p>
      <div className="rating-row">
        <span className="meta-icons">
          <Eye size={14} weight="regular" /> {resource.views}
          <BookmarkSimple size={14} weight="regular" /> {resource.saves}
        </span>
        <span className="resource-purchase-meta">
          <ShoppingBagOpen size={14} weight="regular" /> 구매후기 {resource.reviewCount}개
        </span>
      </div>
    </button>
  );
}

function ResourceMarketPage({ selectedDepartmentId, selectedResourceType, setPage }) {
  const [departmentId, setDepartmentId] = useState(selectedDepartmentId ?? 'all');
  const [type, setType] = useState(selectedResourceType ?? 'all');
  const [sort, setSort] = useState('인기순');

  useEffect(() => {
    setType(selectedResourceType ?? 'all');
  }, [selectedResourceType]);

  useEffect(() => {
    setDepartmentId(selectedDepartmentId ?? 'all');
  }, [selectedDepartmentId]);

  const filtered = sortItems(resources.filter((resource) => {
    const matchesDepartment = departmentId === 'all' || resource.departmentId === departmentId;
    const matchesType = type === 'all' || resource.type === type;
    return matchesDepartment && matchesType;
  }), sort);

  return (
    <main className="page">
      <PageTitle eyebrow="자료 탐색" title="합격한 사람들은 무엇을 준비했을까요?" />
      <DepartmentSelect value={departmentId} onChange={setDepartmentId} />
      <div className="filter-block">
        <FilterChips items={['all', '포트폴리오', '자기소개서', '면접 질문 모음', '시험 자료']} value={type} onChange={setType} allLabel="전체 자료" />
        <FilterChips items={['인기순', '최신순', '저장순']} value={sort} onChange={setSort} />
      </div>
      <div className="stack">
        {filtered.map((resource) => (
          <ResourceCard key={resource.id} resource={resource} setPage={setPage} />
        ))}
      </div>
    </main>
  );
}

function ResourceDetailPage({ id, setPage, openPayment }) {
  const resource = resources.find((item) => item.id === id) ?? resources[0];
  const relatedReviews = reviews
    .filter((review) => review.departmentId === resource.departmentId)
    .slice(0, 2);

  return (
    <main className="page resource-detail-page">
      <button className="back-button" onClick={() => setPage({ name: 'resources' })}>
        ← 자료
      </button>
      <article className="article-detail">
        <div className="article-head expanded-card-head resource-expanded-head">
          <span className="resource-badge">
            <FileText size={13} weight="regular" />
            {departmentBadgeName(resource.toDepartment)}
          </span>
          <h1>{resource.title}</h1>
          <p className="condition-line resource-condition-line">
            학점 {resource.gpa} · {resource.majorStatus}
            {resource.pageCount ? ` · ${resource.pageCount}p` : ''}
          </p>
          <div className="seller-trust-card">
            <span>
              <ShieldCheck size={16} weight="regular" />
              인증 완료 판매자
            </span>
            <p>{resource.fromMajor} → {resource.toDepartment} · 학점 {resource.gpa}</p>
          </div>
          <p className="detail-meta-line">
            <Eye size={14} weight="regular" /> 조회 {resource.views}
            <BookmarkSimple size={14} weight="regular" /> 저장 {resource.saves}
          </p>
          <p className="detail-price-line">{formatPrice(resource.price)}</p>
        </div>
        <section className="detail-block">
          <h2>이 자료에 포함된 내용</h2>
          <p className="detail-lead">{resource.description}</p>
          <ul className="include-list">
            {resource.includes.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
        <section className="detail-block">
          <h2>미리보기</h2>
          <div className="preview-grid">
            <div className="preview-page">
              <span>Preview 01</span>
              <p>구성 흐름과 목차 일부를 확인할 수 있습니다.</p>
            </div>
            <div className="preview-page blur">
              <span>Preview 02</span>
              <p>작업 설명 방식 일부 공개</p>
            </div>
            <div className="preview-page locked">
              <span>Locked</span>
              <p>구매 후 전체 열람 가능</p>
            </div>
          </div>
        </section>
        <section className="detail-block">
          <h2>구매후기</h2>
          <div className="stack compact">
            {resource.purchaseReviews.map((review) => (
              <div className="mini-review" key={review.text}>
                <strong>평점 {review.rating}.0 · {review.nickname}</strong>
                <p>{review.text}</p>
              </div>
            ))}
          </div>
        </section>
      </article>

      <ReviewPreviewSection title="관련 무료 후기" items={relatedReviews} setPage={setPage} />
      <div className="sticky-purchase">
        <button onClick={() => openPayment(resource)}>구매하기</button>
      </div>
    </main>
  );
}

function WriteReviewPage() {
  const [mode, setMode] = useState('menu');
  const [toast, setToast] = useState(false);
  const [selectedTags, setSelectedTags] = useState(['면접후기']);
  const selectableTags = ['면접후기', '실기경험', '개별통보', '결과통보', '포트폴리오준비', '자기소개서'];

  function toggleTag(tag) {
    setSelectedTags((current) =>
      current.includes(tag) ? current.filter((item) => item !== tag) : [...current, tag],
    );
  }

  function submit(event) {
    event.preventDefault();
    setToast(true);
    window.setTimeout(() => setToast(false), 2200);
  }

  return (
    <main className="page">
      {mode === 'menu' && (
        <>
          <PageTitle eyebrow="정보 공유" title="다음 지원자를 위해 정보를 공유해주세요!" />
          <p className="page-support-copy">
            실제 후기를 공유하거나, 합격 자료를 판매할 수 있습니다.
          </p>
          <BenefitCard />
          <div className="contribution-grid">
            <button className="contribution-card" onClick={() => setMode('review')}>
              <ChatCircleText size={22} weight="regular" />
              <strong>후기 작성하기</strong>
              <span>실제 전과 경험을 남겨주세요.</span>
            </button>
            <button className="contribution-card resource-contribution-card" onClick={() => setMode('sell')}>
              <FileText size={22} weight="regular" />
              <strong>자료 판매 신청</strong>
              <span>합격 포트폴리오, 자소서, 시험정보, 면접자료를 판매할 수 있습니다.</span>
            </button>
          </div>
        </>
      )}
      {mode === 'review' && (
        <>
          <button className="back-button" onClick={() => setMode('menu')}>← 작성 선택</button>
          <PageTitle eyebrow="후기 작성" title="실제 전과 경험을 남겨주세요." />
          <BenefitCard compact />
          <p className="auto-anonymous-note">닉네임은 시스템이 자동으로 익명 번호로 부여합니다.</p>
      <form className="write-form" onSubmit={submit}>
        <input placeholder="출발 학과" />
        <select defaultValue="">
          <option value="" disabled>학과 선택</option>
          {departments.map((department) => (
            <option key={department.id}>{department.name}</option>
          ))}
        </select>
        <input placeholder="전과 시기 예: 2025학년도 2학기" />
        <select defaultValue="합격">
          <option>합격</option>
          <option>불합격</option>
          <option>결과 대기</option>
        </select>
        <input placeholder="제목" />
        <textarea placeholder="자유 후기 본문을 적어주세요. 면접 분위기, 개별 통보 방식, 포트폴리오 준비, 자기소개서 방향처럼 실제로 궁금했던 내용을 편하게 남길 수 있어요." />
        <div className="chip-row">
          {selectableTags.map((tag) => (
            <button
              type="button"
              key={tag}
              className={selectedTags.includes(tag) ? 'selected' : ''}
              onClick={() => toggleTag(tag)}
            >
              {tag}
            </button>
          ))}
        </div>
        <button className="primary-submit" type="submit">제출하기</button>
      </form>
        </>
      )}
      {mode === 'sell' && <SellApplicationPage onBack={() => setMode('menu')} />}
      {toast && <div className="toast">프로토타입에서는 실제 저장되지 않습니다. 익명 번호가 자동 부여됩니다.</div>}
    </main>
  );
}

function BenefitCard({ compact = false }) {
  return (
    <section className={compact ? 'benefit-card compact-benefit-card' : 'benefit-card'}>
      <Gift size={20} weight="regular" />
      <div>
        <strong>후기 작성 혜택</strong>
        <p>
          매달 가장 도움된 후기 작성자 3명을 선정해 스타벅스 기프티콘, 배달의민족 상품권,
          네이버페이 포인트 등 소정의 선물을 제공합니다.
        </p>
      </div>
    </section>
  );
}

function SellApplicationPage({ onBack }) {
  const mailTo = 'mailto:submit@pathfinder.kr?subject=Pathfinder 자료 판매 신청';

  return (
    <section className="sell-application-page">
      <button className="back-button" onClick={onBack}>← 작성 선택</button>
      <PageTitle eyebrow="자료 판매 신청" title="운영진 검수 후 자료가 등록됩니다." />
      <article className="policy-card">
        <h2>판매 신청 조건</h2>
        <ol>
          <li>후기 작성 완료</li>
          <li>전과 인증 완료</li>
        </ol>
        <p>후기 작성은 자료 판매를 위한 기여 인증 역할을 합니다.</p>
      </article>
      <article className="policy-card">
        <h2>전과 인증 예시</h2>
        <ul>
          <li>전과 결과 화면</li>
          <li>학적 변경 화면</li>
          <li>ON국민 또는 포털 캡처</li>
        </ul>
        <p>운영진 확인 후 인증 완료 판매자 상태가 부여됩니다.</p>
      </article>
      <article className="policy-card resource-policy-card">
        <h2>아래 내용을 메일로 보내주세요.</h2>
        <ol>
          <li>포트폴리오 PDF</li>
          <li>자소서 / 면접자료 원본</li>
          <li>전과 인증 자료</li>
          <li>학점</li>
          <li>기존학과</li>
          <li>현재학과</li>
          <li>연락처</li>
        </ol>
        <a className="mail-button" href={mailTo}>
          <EnvelopeSimple size={17} weight="regular" />
          submit@pathfinder.kr
        </a>
      </article>
    </section>
  );
}

function DepartmentSelect({ value, onChange }) {
  return (
    <select className="full-select" value={value} onChange={(event) => onChange(event.target.value)}>
      <option value="all">전체 학과</option>
      {departments.map((department) => (
        <option key={department.id} value={department.id}>
          {department.name}
        </option>
      ))}
    </select>
  );
}

function FilterChips({ items, value, onChange, allLabel }) {
  return (
    <div className="chip-row">
      {items.map((item) => (
        <button key={item} className={value === item ? 'selected' : ''} onClick={() => onChange(item)}>
          {item === 'all' ? allLabel ?? '전체' : item}
        </button>
      ))}
    </div>
  );
}

function PageTitle({ eyebrow, title }) {
  return (
    <section className="page-title">
      <p className="eyebrow">{eyebrow}</p>
      <h1>{title}</h1>
    </section>
  );
}

function PaymentModal({ resource, onClose }) {
  const [completed, setCompleted] = useState(false);

  if (!resource) return null;

  return (
    <div className="modal-backdrop" role="presentation" onClick={onClose}>
      <div className="payment-modal" role="dialog" aria-modal="true" onClick={(event) => event.stopPropagation()}>
        {!completed ? (
          <>
            <p className="eyebrow">Payment Mockup</p>
            <h2>{resource.title}</h2>
            <p className="modal-price">{formatPrice(resource.price)}</p>
            <p>프로토타입에서는 실제 결제가 진행되지 않습니다.</p>
            <div className="payment-methods">
              <button className="selected">카드</button>
              <button>간편결제</button>
              <button>계좌이체</button>
            </div>
            <button className="primary-submit" onClick={() => setCompleted(true)}>
              구매 완료 화면 보기
            </button>
            <button className="plain-button" onClick={onClose}>닫기</button>
          </>
        ) : (
          <>
            <p className="eyebrow">Unlocked</p>
            <h2>구매 완료 목업</h2>
            <p>{resource.title} 전체 열람이 열린 상태처럼 표시됩니다.</p>
            <div className="unlock-box">전체 자료 열람 가능</div>
            <button className="primary-submit" onClick={onClose}>확인</button>
          </>
        )}
      </div>
    </div>
  );
}

export default function App() {
  const [page, setPage] = useState({ name: 'home' });
  const [paymentResource, setPaymentResource] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [page]);

  const pageNode = useMemo(() => {
    if (page.name === 'department') return <DepartmentPage id={page.id} setPage={setPage} />;
    if (page.name === 'reviews') return <ReviewListPage selectedDepartmentId={page.departmentId} selectedResult={page.result} setPage={setPage} />;
    if (page.name === 'reviewDetail') return <ReviewDetailPage id={page.id} setPage={setPage} />;
    if (page.name === 'resources') return <ResourceMarketPage selectedDepartmentId={page.departmentId} selectedResourceType={page.resourceType} setPage={setPage} />;
    if (page.name === 'resourceDetail') {
      return (
        <ResourceDetailPage
          id={page.id}
          setPage={setPage}
          openPayment={(resource) => setPaymentResource(resource)}
        />
      );
    }
    if (page.name === 'write') return <WriteReviewPage />;
    return <HomePage setPage={setPage} />;
  }, [page]);

  return (
    <div className="app-shell">
      <Header page={page} setPage={setPage} />
      {pageNode}
      <BottomNav page={page} setPage={setPage} />
      <PaymentModal resource={paymentResource} onClose={() => setPaymentResource(null)} />
    </div>
  );
}
