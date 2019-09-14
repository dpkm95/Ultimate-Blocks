import { Fragment } from 'react';

export const oneColumnIcon = (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		height="20"
		width="20"
		viewBox="0 0 110 110"
	>
		{[...Array(6).keys()].map(a => (
			<rect width="110" height="10" x="0" y={a * 20} />
		))}
	</svg>
);

export const twoColumnsIcon = (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		height="20"
		width="20"
		viewBox="0 0 110 110"
	>
		{[...Array(6).keys()].map(a => (
			<Fragment>
				<rect width="50" height="10" x="0" y={a * 20} />
				<rect width="50" height="10" x="60" y={a * 20} />
			</Fragment>
		))}
	</svg>
);

export const threeColumnsIcon = (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		height="20"
		width="20"
		viewBox="0 0 110 110"
	>
		{[...Array(6).keys()].map(a => (
			<Fragment>
				<rect width="30" height="10" x="0" y={a * 20} />
				<rect width="30" height="10" x="40" y={a * 20} />
				<rect width="30" height="10" x="80" y={a * 20} />
			</Fragment>
		))}
	</svg>
);

export const warning = (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 512 512"
		width="20px"
		height="20px"
	>
		<path
			d="M256,0C114.497,0,0,114.507,0,256c0,141.503,114.507,256,256,256c141.503,0,256-114.507,256-256 C512,114.497,397.493,0,256,0z M256,472c-119.393,0-216-96.615-216-216c0-119.393,96.615-216,216-216 c119.393,0,216,96.615,216,216C472,375.393,375.385,472,256,472z"
			fill="#D80027"
		/>
		<path
			d="M256,128.877c-11.046,0-20,8.954-20,20V277.67c0,11.046,8.954,20,20,20s20-8.954,20-20V148.877 C276,137.831,267.046,128.877,256,128.877z"
			fill="#D80027"
		/>
		<circle cx="256" cy="349.16" r="27" fill="#D80027" />
	</svg>
);

export const success = (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 426.667 426.667"
		width="20px"
		height="20px"
	>
		<polygon
			points="293.333,135.04 190.08,240.213 137.173,187.093 108.8,215.467 192.213,298.667 326.187,168.747"
			fill="#4f8a10"
		/>
		<path
			d="M213.333,0C95.513,0,0,95.513,0,213.333s95.513,213.333,213.333,213.333s213.333-95.513,213.333-213.333 S331.154,0,213.333,0z M213.333,388.053c-96.495,0-174.72-78.225-174.72-174.72s78.225-174.72,174.72-174.72 c96.446,0.117,174.602,78.273,174.72,174.72C388.053,309.829,309.829,388.053,213.333,388.053z"
			fill="#4f8a10"
		/>
	</svg>
);

export const info = (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 437.6 437.6"
		width="20px"
		height="20px"
	>
		<g fill="#00529b">
			<path d="M194,142.8c0.8,1.6,1.6,3.2,2.4,4.4c0.8,1.2,2,2.4,2.8,3.6c1.2,1.2,2.4,2.4,4,3.6c1.2,0.8,2.8,2,4.8,2.4 c1.6,0.8,3.2,1.2,5.2,1.6c2,0.4,3.6,0.4,5.2,0.4c1.6,0,3.6,0,5.2-0.4c1.6-0.4,3.2-0.8,4.4-1.6h0.4c1.6-0.8,3.2-1.6,4.8-2.8 c1.2-0.8,2.4-2,3.6-3.2l0.4-0.4c1.2-1.2,2-2.4,2.8-3.6s1.6-2.4,2-4c0-0.4,0-0.4,0.4-0.8c0.8-1.6,1.2-3.6,1.6-5.2 c0.4-1.6,0.4-3.6,0.4-5.2s0-3.6-0.4-5.2c-0.4-1.6-0.8-3.2-1.6-5.2c-1.2-2.8-2.8-5.2-4.8-7.2c-0.4-0.4-0.4-0.4-0.8-0.8 c-1.2-1.2-2.4-2-4-3.2c-1.6-0.8-2.8-1.6-4.4-2.4c-1.6-0.8-3.2-1.2-4.8-1.6c-2-0.4-3.6-0.4-5.2-0.4c-1.6,0-3.6,0-5.2,0.4 c-1.6,0.4-3.2,0.8-4.8,1.6H208c-1.6,0.8-3.2,1.6-4.4,2.4c-1.6,1.2-2.8,2-4,3.2c-1.2,1.2-2.4,2.4-3.2,3.6 c-0.8,1.2-1.6,2.8-2.4,4.4c-0.8,1.6-1.2,3.2-1.6,4.8c-0.4,2-0.4,3.6-0.4,5.2c0,1.6,0,3.6,0.4,5.2 C192.8,139.6,193.6,141.2,194,142.8z" />
			<path d="M249.6,289.2h-9.2v-98c0-5.6-4.4-10.4-10.4-10.4h-42c-5.6,0-10.4,4.4-10.4,10.4v21.6c0,5.6,4.4,10.4,10.4,10.4h8.4v66.4 H188c-5.6,0-10.4,4.4-10.4,10.4v21.6c0,5.6,4.4,10.4,10.4,10.4h61.6c5.6,0,10.4-4.4,10.4-10.4V300 C260,294,255.2,289.2,249.6,289.2z" />
			<path d="M218.8,0C98,0,0,98,0,218.8s98,218.8,218.8,218.8s218.8-98,218.8-218.8S339.6,0,218.8,0z M218.8,408.8 c-104.8,0-190-85.2-190-190s85.2-190,190-190s190,85.2,190,190S323.6,408.8,218.8,408.8z" />
		</g>
	</svg>
);

export const remove_icon = (
	<svg
		width="20px"
		height="20px"
		viewBox="0 0 100 100"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			d="m50 2.5c-26.199 0-47.5 21.301-47.5 47.5s21.301 47.5 47.5 47.5 47.5-21.301 47.5-47.5-21.301-47.5-47.5-47.5zm24.898 62.301l-10.199 10.199-14.801-14.801-14.801 14.801-10.199-10.199 14.801-14.801-14.801-14.801 10.199-10.199 14.801 14.801 14.801-14.801 10.199 10.199-14.801 14.801z"
			fill="#B70000"
		/>
	</svg>
);

const icon = (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		height="20px"
		width="20px"
		viewBox="0 0 444.816 444.816"
	>
		<path
			d="M162.871 374.489l-18.688-18.687 56.661-56.734-13.475-18.392-59.127 59.186-18.937-18.936h-.015l62.093-62.078-2.716-3.699c-9.352-.896-18.011-4.784-25.116-10.98l-68.168 68.155c-1.307 1.306-2.933 3.327-3.988 7.103-7.47 26.702-29.848 104.268-29.848 104.268a15.01 15.01 0 003.816 14.767 15.005 15.005 0 0010.627 4.404c1.38 0 2.775-.191 4.14-.588l104.853-30.063a15.025 15.025 0 006.487-3.816l63.18-63.178-17.967-24.528-53.812 53.796zm-60.405 24.381l-17.541-17.512 11.787-41.145 46.886 46.871-41.132 11.786zM254.673 169.011l3.788 2.775 35.728-35.715 18.804 18.805-32.794 32.837 18.409 13.476 30.325-30.371 18.819 18.818-27.45 27.45 24.528 17.967 58.526-57.395c26.76-26.759 26.774-70.151.015-96.925l-.03-.03a68.586 68.586 0 00-48.439-20.08 68.544 68.544 0 00-48.457 20.067l-62.679 63.281c6.299 7.249 10.07 15.969 10.907 25.04zM162.416 220.887a14.98 14.98 0 0010.627 4.404c3.112 0 6.092-1.219 8.72-3.142l21.416 29.225 47.78-47.809-29.21-21.403c4.3-5.871 4.051-14.033-1.263-19.347a14.982 14.982 0 00-10.628-4.403 14.982 14.982 0 00-10.628 4.403l-36.814 36.816c-5.872 5.873-5.872 15.385 0 21.256zM417.405 325.49L275.502 221.534l-54.356 54.385 103.943 141.888a66.088 66.088 0 0048.235 26.819c1.688.132 3.361.191 5.034.191a66.02 66.02 0 0046.708-19.347 66.042 66.042 0 0019.158-51.744 66.085 66.085 0 00-26.819-48.236zM117.19 187.919a30.58 30.58 0 0019.802-4.434 30.36 30.36 0 005.372-4.27s29.661-29.723 39.59-39.589c9.957-9.895 10.158-19.583 8.221-28.257-4.463-19.846-14.43-39.076-27.112-51.113-36.874-35.053-57.527-8.763-93.726-19.949C46.29 33.172 25.93 14.25 14.819 2.286 12.968.29 10.15-.471 7.553.29a7.136 7.136 0 00-5.006 5.637C-2.298 33.833-4.484 99.155 59.75 163.389c13.007 12.992 35.069 21.873 57.44 24.53z"
			fill="#f64646"
		/>
	</svg>
);

export default icon;
