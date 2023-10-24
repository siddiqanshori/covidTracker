// Text in Case
      var formulir = document.getElementById('formCovid')
      var negara = document.getElementById('namanegara')
      var input = document.getElementById('country')

      formulir.addEventListener('submit', function (event) {

        // agar form tidak benar benar mengirimkan data ke server dan merefresh halaman
        event.preventDefault()

        namanegara.innerText = country.value

      })