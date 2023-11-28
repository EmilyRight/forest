class Share {
  constructor() {
    this.copyIcon = document.querySelector('.copy-icon');
    this.copyTooltip = document.querySelector('.copy-tooltip');
    this.okIcon = document.querySelector('.share__icon_ok');
    this.vkIcon = document.querySelector('.share__icon_vk');
    this.tgIcon = document.querySelector('.share__icon_tg');
  }

  init() {
    this.copyIcon?.addEventListener('click', () => this.copyLink());
    this.shareWithSocialMedia();
  }

  copyLink() {
    navigator.clipboard.writeText(window.location.href)
      .then(() => {
        this.copyTooltip.classList.add('opened');
        setTimeout(() => {
          this.copyTooltip.classList.remove('opened');
        }, 2000);
      })
      .catch((err) => {
        console.log('Something went wrong', err);
      });
  }

  shareWithSocialMedia() {
    const shareOptions = {
      url: window.location.href,
    };

    this.vkIcon?.addEventListener('click', () => {
      this.vkIcon.href = `http://vk.com/share.php?url=${shareOptions.url}`;
    });
    this.okIcon?.addEventListener('click', () => {
      this.okIcon.href = `https://connect.ok.ru/offer?url=${shareOptions.url}`;
    });
    this.tgIcon?.addEventListener('click', () => {
      this.tgIcon.href = `https://t.me/share/url?url=${shareOptions.url}`;
    });
  }
}

export default Share;
