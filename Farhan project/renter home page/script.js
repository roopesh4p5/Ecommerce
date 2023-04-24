
const tabs = document.querySelectorAll('[data-tab-target]')
const tabContents = document.querySelectorAll('[data-tab-content]')

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const target = document.querySelector(tab.dataset.tabTarget)
    tabContents.forEach(tabContent => {
      tabContent.classList.remove('active')
    })
    tabs.forEach(tab => {
      tab.classList.remove('active')
    })
    tab.classList.add('active')
    target.classList.add('active')
  })
})
const profileTab = document.querySelector('[data-tab-target="Profile"]');
const cartTab = document.querySelector('[data-tab-target="Cart"]');
const container = document.querySelector('.tabs');

profileTab.addEventListener('click', () => {
  tabs.forEach(tab => {
    tab.classList.remove('active');
  });
  profileTab.classList.add('active');
  container.innerHTML = '<div id="tab-content" data-tab-content></div>';
  container.className=''
  const profileContent = document.getElementById('Profile');
  tabContents.forEach(tabContent => {
    tabContent.classList.remove('active');
  });
  profileContent.classList.add('active');
});

cartTab.addEventListener('click', () => {
  tabs.forEach(tab => {
    tab.classList.remove('active');
  });
  cartTab.classList.add('active');
  container.innerHTML = '<div id="tab-content" data-tab-content></div>';
  container.className=''
  const cartContent = document.getElementById('Cart');
  tabContents.forEach(tabContent => {
    tabContent.classList.remove('active');
  });
  cartContent.classList.add('active');
});
