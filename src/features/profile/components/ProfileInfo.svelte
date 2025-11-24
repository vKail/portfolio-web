<script>
	import { profileData } from '../data/profile.data.ts';
	import '../styles/profile.css';
</script>

<div class="max-w-4xl w-full px-6">
	<div id="personal-info" class="profile-section">
		<h1 class="name-header">{profileData.name}</h1>
		<p class="title-header">{profileData.title}</p>
		<p class="text-[#34d399] text-lg mb-4"> {profileData.status}</p>
		
		<div class="contact-info">
			<div><span class="profile-label">Location:</span>{profileData.contact.location}</div>
		</div>
		
		<p class="profile-summary">{profileData.summary}</p>
	</div>

	<div id="experience" class="profile-section">
		<h2 class="profile-title">Experience</h2>
		<div class="profile-content">
			{#each profileData.experience as exp}
				<div class="experience-item">
					<div class="flex justify-between items-start flex-wrap gap-2 mb-2">
						<div>
							<p class="role-title">{exp.role}</p>
							<p class="company-name">{exp.company}</p>
						</div>
						<span class="text-xs px-3 py-1 rounded-full {exp.status === 'Completed' ? 'bg-white/10 text-white/60' : 'bg-[#34d399]/20 text-[#34d399]'}">
							{exp.status}
						</span>
					</div>
					<p class="period">{exp.period} • {exp.type}</p>
					<p class="description">{exp.description}</p>
				</div>
			{/each}
		</div>
	</div>

	<div id="education" class="profile-section">
		<h2 class="profile-title">Education</h2>
		<div class="profile-content">
			<div class="experience-item">
				<div class="flex justify-between items-start flex-wrap gap-2">
					<div>
						<p class="role-title">{profileData.education.degree}</p>
						<p class="company-name">{profileData.education.institution}</p>
					</div>
					<span class="text-xs px-3 py-1 rounded-full bg-[#34d399]/20 text-[#34d399]">
						{profileData.education.status}
					</span>
				</div>
				<p class="period">{profileData.education.period}</p>
			</div>
		</div>
	</div>

	<div id="skills" class="profile-section">
		<h2 class="profile-title">Technical Skills</h2>
		<div class="profile-content">
			<div class="skills-grid">
				<div class="skill-item">
					<span class="skill-category">Languages & Frameworks</span>
					<span class="skill-value">{profileData.skills.languages}</span>
				</div>
				<div class="skill-item">
					<span class="skill-category">Databases</span>
					<span class="skill-value">{profileData.skills.databases}</span>
				</div>
				<div class="skill-item">
					<span class="skill-category">Software Architecture</span>
					<span class="skill-value">{profileData.skills.architecture}</span>
				</div>
				<div class="skill-item">
					<span class="skill-category">Best Practices</span>
					<span class="skill-value">{profileData.skills.practices}</span>
				</div>
				<div class="skill-item">
					<span class="skill-category">Server Management</span>
					<span class="skill-value">{profileData.skills.servers}</span>
				</div>
				<div class="skill-item">
					<span class="skill-category">Soft Skills</span>
					<span class="skill-value">{profileData.skills.soft}</span>
				</div>
			</div>
			<p class="profile-summary">{profileData.additionalSkills}</p>
		</div>
	</div>

	<div id="hobbies" class="profile-section">
		<h2 class="profile-title">Beyond Code</h2>
		<div class="profile-content">
			<p class="hobbies-text mb-6">{profileData.hobbies}</p>
			<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
				<div class="p-4 bg-white/[0.02] border border-white/5 rounded-lg">
					<h4 class="text-[#34d399] font-semibold mb-2">⚽ Sports Enthusiast</h4>
					<p class="text-white/70 text-sm">Basketball player, gym regular, and passionate football fan. I follow La Tri and FC Barcelona religiously.</p>
				</div>
				<div class="p-4 bg-white/[0.02] border border-white/5 rounded-lg">
					<h4 class="text-[#34d399] font-semibold mb-2">🎸 Creative Side</h4>
					<p class="text-white/70 text-sm">I enjoy playing guitar, singing, and gaming. Music and games help me unwind and boost creativity.</p>
				</div>
			</div>
		</div>
	</div>
</div>
