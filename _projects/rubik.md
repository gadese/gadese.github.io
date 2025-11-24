---
id: rubik
layout: project
title: Self-solving Rubik's cube
permalink: /rubik/rubik.html
url: rubik/rubik.html
colorClass: color-8
iconClass: icon-puzzle
titleHtml: "Self-solving <br>rubik's <br>cube"
enabled: true
order: 90
description: "ROS-based self-solving Rubik's cube robot using computer vision and motion planning."
keywords: "ROS, computer vision, robotics, Rubik's cube"
---

<section class="colorlib-about" data-section="about">
	<div class="colorlib-narrow-content">
		<div class="row">
			<div class="col-md-12">
				<div class="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
					<div class="col-md-12">
						<div class="about-desc">
							<h2>Self-solving Rubik's cube</h2>
							<hr>
							<h3 class="colourlib-heading">Project Description</h3>
							<p>My goal with this project was to learn how to use ROS (Robot Operating System), as well as to get more familiar with using computer vision with a real project. With this in mind, the project is pretty simple: to create a simple robot capable of receiving a scrambled Rubik's cube and to solve it on its own. The workflow is as follows:</p>
							<ul>
								<li>Place the Rubik's cube on the robot and begin the solving process</li>
								<li>Use a simple webcam to capture the 1st face of the cube</li>
								<li>Autonomously turn the cube around to capture all 6 faces</li>
								<li>Using the 6 RGB images, use OpenCV and a simple K-nearest-neighbors classifier to determine the current cube configuration</li>
								<li>Run a solving algorithm to find the necessary moves to solve the cube</li>
								<li>Send the moves to the robot who then applies them</li>     
							</ul>
							<p><strong>Used Technologies:</strong> Python 2.7, OpenCV, Scikit-Learn, ROS, Catia</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
