---
id: autonomous-feeding
layout: project
title: Autonomous feeding system for people with upper body disabilities
permalink: /projet-maitrise/maitrise.html
url: projet-maitrise/maitrise.html
colorClass: color-1
iconClass: icon-bulb
titleHtml: "Autonomous<br> Feeding <br>System"
enabled: true
featured: true
order: 10
description: "Autonomous feeding system for people with upper body disabilities using ROS, Kinova MICO arm, and computer vision."
keywords: "robotics, ROS, computer vision, assistive technology"
---

<section class="colorlib-about" data-section="about">
	<div class="colorlib-narrow-content">
		<div class="row">
			<div class="col-md-12">
				<div class="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
					<div class="col-md-12">
						<div class="about-desc">
							<h2>Autonomous feeding system for people with upper body disabilities</h2>
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
						<p>The goal of my M.Sc. was to develop a proof of concept for an autonomous feeding system for people with upper-body disabilities.<br><br>The proposed solution combines classical robotics concepts with modern techniques, such as computer vision and pathplanning with ROS.<br><br> Due to COVID-19, I was unable to implement the system on a real-life robot arm so everything was done with simulation.<br><br>
							<strong>Technologies Used: </strong>Robot Operating System (ROS), Kinova MICO arm, Faster RCNN (computer vision), pointclouds with Intel D415 stereo camera, Python, C++
						</p>
					</div>
				</div>
			</div>
			<div class="row">
				<div class="project shadow-large">
					<div class="project-image">
						<h3>Demo</a></h3>
						<video width="720" height="480" controls>
							<source src="{{ "/assets/projects/autonomous-feeding/images/carrot_broccoli_demo.mp4" | relative_url }}" type="video/mp4">
						</video>
						<p>Video demonstration<br>
						</p>
					</div>
				</div>
			</div>
			<div class="row">
				<div class="project shadow-large">
					<div class="project-image-fit">
						<h3>Computer vision: detecting food in a plate in 3D</h3>
						<p>Given an image from the stereo camera, the system is able to find the 3D position of food in a plate<br></p>
						<img src="{{ "/assets/projects/autonomous-feeding/images/carrots.png" | relative_url }}" style="width:400px;height:400px;">
						<br>
						<img src="{{ "/assets/projects/autonomous-feeding/images/broccoli.png" | relative_url }}" style="width:400px;height:400px;">
						</p>
					</div>
				</div>
			</div>
			<div class="row">
				<div class="project shadow-large">
					<div class="project-image-fit">
						<h3>Obstacle avoidance</h3>
						<img src="{{ "/assets/projects/autonomous-feeding/images/obstacle.png" | relative_url }}" style="width:400px;height:400px;">
						<p>An example of a complex obstacle handled by the system. The goal is to grab the cylinder on the other side of the obstacle.<br></p>
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
