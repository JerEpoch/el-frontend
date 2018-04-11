<template>
	<div>
		<b-navbar toggleable type="light" variant="light">
			<b-navbar-toggle target="nav_text_collapse"></b-navbar-toggle>
			<b-navbar-brand><router-link to="/">EL-Bracket</router-link></b-navbar-brand>
			<b-collapse is-nav id="nav_text_collapse">
				<b-navbar-nav>
					<b-nav-item><router-link to="/getapi"><a>API</a></router-link></b-nav-item>
				</b-navbar-nav>
				<b-navbar-nav class="ml-auto">
					<b-nav-item right><router-link to="/about"><a>About</a></router-link></b-nav-item>
				</b-navbar-nav>

			</b-collapse>
		</b-navbar>
	</div>
</template>
