(function () {
  const $ = window.$
  const localQuotes = quotes.slice()

  function newQuotes () {
    const selection = []

    for (let i = 0; i < 20; i += 1) {
      let pick = localQuotes[~~(Math.random() * localQuotes.length)]
      while (selection.includes(pick)) {
        pick = localQuotes[~~(Math.random() * localQuotes.length)]
      }
      selection.push(i % 10 === 0 && i !== 0 ? '<br><br>' + pick : pick)
    }

    return selection.join(' ')
  }

  $('#main').html(newQuotes())

  $('#refresh').on('click', function () {
    $('#main').html(newQuotes())
  })

  $('#add').on('click', function () {
    $('#main').html((i, currentContents) => currentContents + '<br><br>' + newQuotes())
  })

  $(document).ready(function () {
    var clipboard = new window.Clipboard('#copy')
    clipboard.on('success', function (e) {
      e.clearSelection()
      $('#copy, #main').fadeOut('slow', function () {}).fadeIn()
    })
  })
})()
