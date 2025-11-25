(function () {
  "use strict";

  var projects = [
    {
      id: "autonomous-feeding",
      url: "projet-maitrise/maitrise.html",
      colorClass: "color-1",
      iconClass: "icon-bulb",
      titleHtml: "Autonomous<br> Feeding <br>System",
      enabled: true
    },
    {
      id: "speed-signs",
      url: "speedsigns/speedsigns.html",
      colorClass: "color-2",
      iconClass: "icon-waves",
      titleHtml: "Object Detection:<br> Speed Signs",
      enabled: true
    },
    {
      id: "robot-facial-recog",
      url: "robot-facial-recog/robot-facial-recog.html",
      colorClass: "color-3",
      iconClass: "icon-cog-outline",
      titleHtml: "Robot control<br>with facetracking",
      enabled: true
    },
    {
      id: "deep-learning",
      url: "deeplearning/deeplearning.html",
      colorClass: "color-4",
      iconClass: "fa fa-code",
      titleHtml: "Other Deep <br> Learning <br> Code",
      enabled: true
    },
    {
      id: "oct-compensation",
      url: "oct/oct.html",
      colorClass: "color-4",
      iconClass: "icon-bulb",
      titleHtml: "OCT Compensation<br>system",
      enabled: false
    },
    {
      id: "segway",
      url: "segway/segway.html",
      colorClass: "color-5",
      iconClass: "icon-truck2",
      titleHtml: "Self-balancing<br>robot <br>(segway)",
      enabled: true
    },
    {
      id: "habitronic",
      url: "habitronic/habitronic.html",
      colorClass: "color-6",
      iconClass: "icon-compass",
      titleHtml: "Sensory<br> glove for<br>rock climbers",
      enabled: true
    },
    {
      id: "robust-design",
      url: "robust-design/robust-design.html",
      colorClass: "color-7",
      iconClass: "icon-plane",
      titleHtml: "Robust design<br>of a <br>quadrotor",
      enabled: true
    },
    {
      id: "rubik",
      url: "rubik/rubik.html",
      colorClass: "color-8",
      iconClass: "icon-puzzle",
      titleHtml: "Self-solving <br>rubik's <br>cube",
      enabled: true
    },
    {
      id: "duckie",
      url: "duckie/duckie.html",
      colorClass: "color-1",
      iconClass: "icon-waves",
      titleHtml: "Duckietown<br>competition",
      enabled: false
    }
  ];

  function createProjectColumn(project) {
    var col = document.createElement("div");
    col.className = "col-md-3";

    var link = document.createElement("a");
    link.href = project.url;
    link.target = "_blank";

    var services = document.createElement("div");
    services.className = "services " + project.colorClass;

    var span = document.createElement("span");
    span.className = "icon2";

    var icon = document.createElement("i");
    icon.className = project.iconClass;
    span.appendChild(icon);

    var title = document.createElement("h3");
    title.innerHTML = project.titleHtml;

    services.appendChild(span);
    services.appendChild(title);
    link.appendChild(services);
    col.appendChild(link);

    return col;
  }

  function renderProjects() {
    var container = document.getElementById("completed-projects-container");
    if (!container) {
      return;
    }

    var enabledProjects = projects.filter(function (project) {
      return project.enabled;
    });

    if (enabledProjects.length === 0) {
      return;
    }

    var fragment = document.createDocumentFragment();
    var currentRow = null;

    enabledProjects.forEach(function (project, index) {
      if (index % 4 === 0) {
        currentRow = document.createElement("div");
        currentRow.className = "row";
        fragment.appendChild(currentRow);
      }

      var col = createProjectColumn(project);
      currentRow.appendChild(col);
    });

    container.innerHTML = "";
    container.appendChild(fragment);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", renderProjects);
  } else {
    renderProjects();
  }
}());
