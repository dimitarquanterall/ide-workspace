/*
 * Copyright (c) 2010-2020 SAP and others.
 * All rights reserved. This program and the accompanying materials
 * are made available under the terms of the Eclipse Public License v2.0
 * which accompanies this distribution, and is available at
 * http://www.eclipse.org/legal/epl-v20.html
 *
 * Contributors:
 *   SAP - initial API and implementation
 */
exports.getTemplate = function () {
	return {
		"name": "javascript",
		"label": "Javascript Service",
		"extension": "js",
		"data": 'var response = require("http/v4/response");\n\nresponse.println("Hello World!");\nresponse.flush();\nresponse.close();',
		"order": 0
	};
};