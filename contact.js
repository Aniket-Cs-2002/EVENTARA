 $(document).ready(function () {
        $(".accordion-header").click(function () {
          const item = $(this).parent();
          $(".accordion-item").not(item).removeClass("active");
          $(".accordion-content")
            .not(item.find(".accordion-content"))
            .slideUp(300);
          item.toggleClass("active");
          item.find(".accordion-content").stop(true, true).slideToggle(300);
        });
      });