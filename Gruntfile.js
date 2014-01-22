module.exports = function(grunt) {
    grunt.initConfig({
        jasmine_node: {
            specNameMatcher: '_spec',
            specFolders: ['test'],
            projectRoot: 'src',
            requirejs: false,
            forceExit: true,
            jUnit: {
                report: false,
                savePath: './build/reports/jasmine/',
                useDotNotation: true,
                consolidate: true
            }
        },
    });

    grunt.loadNpmTasks('grunt-jasmine-node');

    grunt.registerTask('test', ['jasmine_node']);
    grunt.registerTask('default', ['test']);
};
