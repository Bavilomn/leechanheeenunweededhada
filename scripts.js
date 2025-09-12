function showCaptcha() {
    // hCaptcha 인증을 보이게 설정
    const captchaDiv = document.getElementById('hcaptcha');
    captchaDiv.style.display = 'block';
}

function onCaptchaSuccess(token) {
    // hCaptcha 인증 성공 시, 업적 및 후기 보기 활성화
    const captchaDiv = document.getElementById('hcaptcha');
    captchaDiv.style.display = 'none';  // hCaptcha 숨기기
    
    const resultDiv = document.getElementById('result');
    const reviewBtn = document.querySelector('.review-btn');
    const fanReviews = document.getElementById('fanReviews');

    // 업적 확인 결과 및 후기를 표시
    resultDiv.style.display = 'block';
    reviewBtn.style.display = 'block';  // 후기 버튼 보이기
    fanReviews.style.display = 'none'; // 후기는 처음에 숨겨짐
}

// 후기를 보여주는 함수
function showReview() {
    const reviews = [
        "이찬희가 컵라면을 먹고 나서, 저는 더 이상 다른 사람과 대화할 수 없었습니다. 그저 그가 대단해 보였거든요! - 팬1",
        "이찬희가 1초 만에 피자를 먹을 때, 나는 시간의 경계를 넘은 느낌이 들었어요. - 팬2",
        "그가 지구의 회전 속도를 바꿔 놓았다고 들었을 때, 나는 그를 신으로 섬기기로 결심했습니다. - 팬3",
        "이찬희가 하루에 100번의 '안녕하세요'라고 인사를 했을 때, 나는 내 인생이 변화했다는 걸 느꼈습니다. - 팬4",
        "이찬희가 공기보다 가벼운 존재임을 깨닫고, 이제 나는 숨을 쉴 때마다 그의 위대함을 느낍니다. - 팬5",
        "이찬희가 커피를 마셨을 때, 그 커피는 스스로를 '이찬희의 음료'라고 칭하며 존경을 표했습니다. - 팬6",
        "이찬희가 한 번 웃을 때, 지구의 중력장이 잠시 멈추는 걸 느꼈습니다. 모든 물체가 그의 웃음에 복종하기 시작했죠. - 팬7",
        "이찬희가 10초 만에 한 권의 책을 읽었을 때, 나는 책이 그에게도 경의를 표하는 순간을 목격했습니다. - 팬8",
        "이찬희가 두 손을 흔들었을 때, 그 바람이 3개의 나라를 동시에 강타하고 평화를 가져왔습니다. - 팬9",
        "이찬희가 커플 아이스크림을 한 입에 먹었을 때, 그는 사랑의 진정한 의미를 깨달은 사람처럼 보였어요. - 팬10",
        "이찬희가 다이어트를 시작했을 때, 단순히 칼로리가 두려워 떨며 도망갔습니다. - 팬11",
        "이찬희가 태양을 보며 '괜찮다'라고 말했다. 그 순간, 태양이 조금 더 밝아졌습니다. - 팬12",
        "이찬희가 일어날 때, 온 세상의 침대가 그를 위해 자리를 양보했습니다. - 팬13",
        "이찬희가 무지개를 두 손으로 움켜잡았을 때, 무지개는 그의 발밑에 완벽히 포개졌습니다. - 팬14",
        "이찬희의 발자국이 땅에 찍힐 때마다, 그 땅은 더 푸르게 변합니다. 농부들은 그의 발자국을 금으로 만들어서 팔고 있습니다. - 팬15"
    ];

    let reviewsHTML = "";
    reviews.forEach(review => {
        reviewsHTML += `<div class="fan-review">${review}</div>`;
    });

    document.getElementById('fanReviews').innerHTML = reviewsHTML;
    document.getElementById('fanReviews').style.display = 'block';
}
