---
id: speed-signs
layout: project
title: Speedlimit sign detection (Centernet)
permalink: /speedsigns/speedsigns.html
url: speedsigns/speedsigns.html
colorClass: color-2
iconClass: icon-waves
titleHtml: "Object Detection:<br> Speed Signs"
enabled: true
featured: true
order: 20
description: "Object detection of speedlimit signs using CenterNet on a Kaggle dataset."
keywords: "computer vision, object detection, CenterNet, deep learning"
---

<section class="colorlib-about" data-section="about">
	<div class="colorlib-narrow-content">
		<div class="row">
			<div class="col-md-12">
				<div class="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
					<div class="col-md-12">
						<div class="about-desc">
							<h2>Speedlimit sign detection (Centernet)</h2>
							<hr>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<div id="projects" class="background-alt">
	<div class="container">
		<div class="col">
			<div class="row">
				<div class="project shadow-large">
					<div class="project-image">
						<h3>Project description</h3>
						<p>My goal with this project was to become familiar with the CenterNet architecture for Object Detection. The project is still on-going, and I will be adding more features as time goes (see TODO section of github page).<br><br>The problem is a typical object detection problem; I am using a small Kaggle dataset (https://www.kaggle.com/c/mapmyindia2/) where speed limit signs are identified with a bounding box, as well as a label for the associated speed limit.<br><br> My next steps for the project is to finalize label classification, as well as to add Data augmentation (both simple data augmentation and more modern techniques like MixUp).<br><br>
							<strong>Find more information on the project's Github page: <a href="https://github.com/gadese/speedsigns"> Project page </a> </strong><br><br>
							<strong>Technologies Used: </strong>Simulink, PID Controller, Arduino(C), Catia
						</p>
					</div>
				</div>
			</div>
			<div class="row">
				<div class="project shadow-large">
					<div class="project-image-fit">
						<h3>Example prediction</h3>
						<img src="{{ "/assets/projects/speed-signs/images/Figure_3.png" | relative_url }}" style="width:1000px;height:500px;">
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
