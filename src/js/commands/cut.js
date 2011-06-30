"use strict";
/**
 * @class elFinder command "copy".
 * Put files in filemanager clipboard.
 *
 * @type  elFinder.command
 * @author  Dmitry (dio) Levashov
 */
elFinder.prototype.commands.cut = function() {
	this.title = 'Cut';
	
	this.shortcuts = [{
		pattern     : 'ctrl+x shift+insert',
		description : 'Cut',
	}];
	
	this.getstate = function(sel) {
		var sel = this.files(sel),
			cnt = sel.length;
		
		return cnt && $.map(sel, function(f) { return f.phash && f.read && !f.locked ? f : null  }).length == cnt ? 0 : -1;
	}
	
	this.exec = function(hashes) {
		var fm     = this.fm,
			errors = fm.errors(),
			dfrd   = $.Deferred()
				.fail(function(error) {
					fm.error(error);
				});

		$.each(this.files(hashes), function(i, file) {
			if (!(file.read && file.phash) ) {
				return !dfrd.reject([errors.copy, file.name, errors.denied]);
			}
			if (file.locked) {
				return !dfrd.reject([errors.locked, file.name]);
			}
		});
		
		return dfrd.isRejected() ? dfrd : dfrd.resolve(fm.clipboard(this.hashes(hashes), true));
	}

}