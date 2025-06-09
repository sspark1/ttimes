document.addEventListener('DOMContentLoaded', () => {
    const articleContainer = document.getElementById('article-container');
    const loadMoreButton = document.getElementById('load-more');
    const subscribeForm = document.getElementById('subscribe-form');

    let page = 1;

    // 가상의 기사 데이터
    const articles = [
        { title: '메타버스의 미래, 현실과 가상의 경계가 무너진다', img: 'https://via.placeholder.com/150x100' },
        { title: '지속 가능한 기술, ESG 경영의 핵심', img: 'https://via.placeholder.com/150x100' },
        { title: '블록체인, 금융을 넘어 예술까지 혁신하다', img: 'https://via.placeholder.com/150x100' },
        { title: '차세대 배터리 기술, 전기차 시장의 판도를 바꾼다', img: 'https://via.placeholder.com/150x100' },
        { title: '노코드/로우코드 플랫폼의 부상', img: 'https://via.placeholder.com/150x100' }
    ];

    function loadArticles() {
        // 실제로는 fetch API를 사용하여 서버에서 데이터를 가져옵니다.
        // 여기서는 가상 데이터를 사용합니다.
        const newArticles = articles.slice((page - 1) * 2, page * 2);

        if (newArticles.length === 0) {
            loadMoreButton.textContent = '마지막 기사입니다.';
            loadMoreButton.disabled = true;
            return;
        }

        newArticles.forEach(article => {
            const articleElement = document.createElement('div');
            articleElement.classList.add('article-item');
            articleElement.innerHTML = `
                <img src="${article.img}" alt="${article.title}">
                <div>
                    <h4>${article.title}</h4>
                    <p>T타임즈가 심층 분석한 최신 ${article.title.split(' ')[0]} 트렌드를 만나보세요.</p>
                    <a href="#" class="read-more">자세히 보기</a>
                </div>
            `;
            articleContainer.appendChild(articleElement);
        });
        page++;
    }

    // 초기 기사 로드
    loadArticles();

    // '더 보기' 버튼 클릭 이벤트
    loadMoreButton.addEventListener('click', loadArticles);

    // 구독 폼 제출 이벤트
    subscribeForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const emailInput = subscribeForm.querySelector('input[type="email"]');
        if (emailInput.value) {
            alert(`${emailInput.value} 주소로 구독 신청이 완료되었습니다!`);
            emailInput.value = '';
        } else {
            alert('이메일 주소를 입력해주세요.');
        }
    });
});