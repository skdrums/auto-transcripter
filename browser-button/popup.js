chrome.tabs.query({},function(tabs){
  $('#tabnum').text('現在開いているタブの数は['+tabs.length+']個です')

  for(let i in tabs){
    $('tbody').after('<tr><td bgcolor="#c0c0c0">'+tabs[i].title + '</td></tr><tr><td>' +  tabs[i].url + '</td></tr>');
  }
});
