// https://github.com/sindresorhus/grunt-concurrent
module.exports = {
	watch: {
		tasks: [
			//'watch:less',
			'watch:sass'
		],
		options: {
			logConcurrentOutput: true
		}
	}
}
