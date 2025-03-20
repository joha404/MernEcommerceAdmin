// Ensure Chart.js is imported correctly (ONLY for ES modules, NOT inside an IIFE)
if (typeof Chart === "undefined") {
  console.error("Chart.js library is not loaded.");
}

// jQuery function wrapper
(function ($) {
  "use strict";

  // Ensure jQuery is loaded
  if (typeof $ === "undefined") {
    console.error("jQuery is not loaded.");
    return;
  }

  // Spinner
  var spinner = function () {
    setTimeout(function () {
      if ($("#spinner").length > 0) {
        $("#spinner").removeClass("show");
      }
    }, 1);
  };
  spinner();

  $(document).ready(function () {
    // Back to top button
    $(window).scroll(function () {
      if ($(this).scrollTop() > 300) {
        $(".back-to-top").fadeIn("slow");
      } else {
        $(".back-to-top").fadeOut("slow");
      }
    });

    $(".back-to-top").click(function () {
      $("html, body").animate({ scrollTop: 0 }, 1500, "easeInOutExpo");
      return false;
    });

    // Sidebar Toggler
    $(".sidebar-toggler").click(function () {
      $(".sidebar, .content").toggleClass("open");
      return false;
    });

    // Ensure Chart.js is loaded before initializing charts
    if (typeof Chart === "undefined") {
      console.error("Chart.js is not loaded.");
      return;
    }

    // Chart Initialization Function
    function createChart(canvasId, type, label, data) {
      var ctx = $("#" + canvasId)
        .get(0)
        ?.getContext("2d");
      if (ctx) {
        new Chart(ctx, {
          type: type,
          data: {
            labels: ["Italy", "France", "Spain", "USA", "Argentina"],
            datasets: [
              {
                label: label,
                backgroundColor: [
                  "rgba(0, 156, 255, .7)",
                  "rgba(0, 156, 255, .6)",
                  "rgba(0, 156, 255, .5)",
                  "rgba(0, 156, 255, .4)",
                  "rgba(0, 156, 255, .3)",
                ],
                data: data,
              },
            ],
          },
          options: { responsive: true },
        });
      }
    }

    // Initialize Charts
    createChart("worldwide-sales", "bar", "USA", [15, 30, 55, 65, 60, 80, 95]);
    createChart("sales-revenue", "line", "Sales", [15, 30, 55, 45, 70, 65, 85]);
    createChart(
      "line-chart",
      "line",
      "Sales",
      [7, 8, 8, 9, 9, 9, 10, 11, 14, 14, 15]
    );
    createChart("bar-chart", "bar", "Countries", [55, 49, 44, 24, 15]);
    createChart("pie-chart", "pie", "Market Share", [55, 49, 44, 24, 15]);
    createChart(
      "doughnut-chart",
      "doughnut",
      "Region Sales",
      [55, 49, 44, 24, 15]
    );
  });
})(jQuery);
