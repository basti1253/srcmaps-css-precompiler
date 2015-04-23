module.exports = {
	all : {
		options : {
			map : {
				prev : '<%= srcDir %>/css/raw/style.css.map',
				inline : false
			},
			// Pass false to disable outdated prefixes cleaning.
			remove : false
		},
		expand: true,
		flatten: true,
		src : '<%= srcDir %>/css/raw/style.css',
		dest : '<%= srcDir %>/css/'
	}
};
