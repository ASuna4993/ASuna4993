// ボタンの要素を取得
const shareButton = document.getElementById('webShareButton');

// ページのdescriptionを取得
const descriptionMeta = document.querySelector("meta[name='description']");
const description = descriptionMeta ? descriptionMeta.getAttribute("content") : '';

// クリックイベントを設定
shareButton.addEventListener('click', async () => {
    try {
        await navigator.share({
            title: document.title,       // ページのタイトルを設定
            text: description,           // ページのdescriptionを設定
            url: window.location.href    // 現在のURLを取得
        });
        console.log('シェア成功！');
    } catch (error) {
        console.error('シェア失敗', error);
    }
});