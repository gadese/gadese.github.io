---
id: robot-facial-recog
layout: project
title: Robot control with facial recognition project
permalink: /robot-facial-recog/robot-facial-recog.html
url: robot-facial-recog/robot-facial-recog.html
body_id: particles-js
colorClass: color-3
iconClass: icon-cog-outline
titleHtml: "Robot control<br>with facetracking"
enabled: true
order: 30
description: "Proof-of-concept robot arm control using facial expression recognition."
keywords: "robotics, computer vision, facial recognition, assistive technology"
---

<section class="colorlib-about" data-section="about">
	<div class="colorlib-narrow-content">
		<div class="row">
			<div class="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
				<div class="col-md-12">
					<div class="about-desc">
						<h2>Robot control with facial recognition project</h2>
						<hr>
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
						<h3>Project Description</h3>
						<p>Despite the advances in technology, people suffering from partial paralysis or muscular dystrophy still have a hard time being completely independant. The goal of this project was to develop of proof-of-concept of a solution to help them have more control over their day to day life.<br><br>The program can use any webcam to detect basic facial expressions: mouth opened/closed, eyes opened/closed, eyebrows up/down and head tilt. Depending on the facial expression, it is then possible to control the movement of the robotic arm.<br><br>
							Also, note that this work was done as part of an undergraduate research project back in 2016.<br>
							<strong>Technologies Used: </strong>C++/OpenFrameworks/Kinova robot arm
						</p>
					</div>
				</div>
			</div>
			<div class="row">
				<div class="project shadow-large">
					<div class="project-image">
						<h3>Demonstration</h3>
						<iframe width="700" height="375"
						src="https://www.youtube.com/embed/uChGqovU5gU">
						</iframe>
						<p>Fun fact: My accent has actually improved since!</p>
					</div>
				</div>
			</div>
			<hr>
			<div class="row">
				<div class="project shadow-large">
					<div class="project-image">
						<h3>Simple explanation</a></h3>
						<p>The webcam tracks the user's face<br>The system tracks 3 facial expressions: eyebrows up/down, eyes opened/closed, mouth opened/closed.<br>The current detected facial expression is highlighted in blue. When held for a pre-determined period of time, the system highlights the decision in yellow and moves the arm accordingly.<br><br>There are 2 control modes: the first one uses pre-registered movements, such as fetching a bottle on the table. The second one assigns a different joint of the robot arm to all 6 main facial expressions. Then, by tilting the head to the side, the user can move every joint independantly in a direction or the other.
						</p>
					</div>
				</div>
			</div>
			<hr>
		</div>
	</div>
</div>
