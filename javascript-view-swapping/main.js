var tabContainer = document.querySelector('.tab-container');

var tabNode = document.querySelectorAll('.tab');

var viewNode = document.querySelectorAll('.view');

tabContainer.addEventListener('click', viewSwap);

function viewSwap(event) {
  if (!event.target.matches('.tab')) {
    return;
  }
  for (var i = 0; i < tabNode.length; i++) {
    var activeTab = tabNode[i];
    if (activeTab === event.target) {
      activeTab.className = 'tab active';
    } else {
      activeTab.className = 'tab';
    }
  }
  var view = event.target.getAttribute('data-view');
  for (var j = 0; j < viewNode.length; j++) {
    var activeView = viewNode[j];
    if (activeView.getAttribute('data-view') !== view) {
      activeView.className = 'view hidden';
    } else {
      activeView.className = 'view';
    }
  }
}
