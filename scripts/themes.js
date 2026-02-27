//------------------------------------------------------------------------------------------------------//
//------------------------------------------------------------------------------------------------------//
//                                     ---Themes---                                                     //
//------------------------------------------------------------------------------------------------------//
//------------------------------------------------------------------------------------------------------//

//-------themes-----------------------------------------------------------------------------------------

function applyGamingTheme() {
    const style = document.createElement('style');
    style.innerHTML = `.window-header {
            background-color: rgba(0, 0, 0, 0.8);
            color: #00ff00;
            text-shadow: 0 0 10px #00ff00, 0 0 20px #00ff00, 0 0 30px #00ff00;
            padding: 10px;
            cursor: move;
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-bottom: 2px solid #00ff00;
        }
        .window-body {
            flex: 1;
            padding: 15px;
            background: linear-gradient(135deg, rgba(50, 50, 50, 0.9), rgba(30, 30, 30, 0.9));
            border-radius: 8px;
        }
        .window-footer {
            padding: 10px;
            text-align: right;
            background-color: rgba(10, 10, 10, 0.5);
        }
        .icon span {
            position: absolute;
            bottom: 0;
            left: 50%;
            transform: translateX(-50%);
            text-align: center;
            color: #00ffcc;
        }
		.error-message {
			background: rgba(20, 20, 20, 0.95);
			color: #39ff14; /* Neon-grün für die Schrift */
			padding: 40px;
			border-radius: 14px;
			text-shadow: 0 0 10px #39ff14; /* Neon-Schattierung für Text */
			box-shadow: 0 12px 28px rgba(0, 0, 0, 0.8);
			animation: fadeInError 0.5s ease, shakeError 0.3s ease 0.2s;
			transform: translate(-50%, -50%);
		}

		@keyframes fadeInError {
			from { opacity: 0; transform: translate(-50%, -60%) scale(0.8); }
			to { opacity: 1; transform: translate(-50%, -50%) scale(1); }
		}

		@keyframes shakeError {
			0%, 100% { transform: translate(-50%, -50%) rotate(-2deg); }
			50% { transform: translate(-50%, -50%) rotate(2deg); }
		}

		.error-message .ok-button {
			background: rgba(20, 20, 20, 0.95);
			border-radius: 4px;
			color: #39ff14; /* Neon-grün für Button-Text */
			padding: 10px 25px;
			transition: background 0.4s, color 0.4s, transform 0.2s ease;
			box-shadow: 0 0 8px #39ff14; /* Neon-Schattierung für Button */
		}

		.error-message .ok-button:hover {
			background: rgba(57, 255, 20, 0.8); /* Helleres Neon-Grün beim Hover */
			color: #ffffff;
			transform: translateY(-3px);
			box-shadow: 0 0 12px #39ff14, 0 0 20px #39ff14; /* Verstärkter Leuchteffekt */
		}
        @keyframes zoomIn {
            from {
                opacity: 0;
                transform: scale(0);
            }
            to {
                opacity: 1;
                transform: scale(1);
            }
        }
        .selected {
            border: 3px solid #00cc00;
            background-color: rgba(0, 204, 0, 0.3);
        }
        .file-label {
            font-size: 14px;
            color: #00cc00;
            text-align: center;
            text-shadow: 0 0 5px #00cc00;
        }
        .context-menu {
            background: rgba(40, 40, 40, 0.9);
            border-radius: 12px;
            animation: slideIn 0.3s ease;
        }
        .context-menu ul li {
            padding: 10px 15px;
            background: rgba(40, 40, 40, 0.7);
            transition: background 0.3s, color 0.3s, transform 0.3s;
        }
        .context-menu ul li:hover {
            background: rgba(50, 50, 50, 0.9);
            color: #00ffcc;
            text-shadow: 0 0 10px #00ffcc;
            transform: scale(1.05);
        }
        .context-menu ul li:active {
            transform: scale(0.95);
            background: rgba(70, 70, 70, 0.9);
        }
        @keyframes slideIn {
            from {
                transform: translateY(-20px);
                opacity: 0;
            }
            to {
                transform: translateY(0);
                opacity: 1;
            }
        }
        .taskbar {
            background: linear-gradient(135deg, rgba(46, 46, 46, 0.9), rgba(30, 30, 30, 0.9));
            color: #e0e0e0;
            height: 40px;
            position: fixed;
            bottom: 15px;
            width: calc(100% - 30px);
            border-radius: 20px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
            padding: 0 15px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            border-top: none;
            transition: all 0.3s ease-in-out;
        }
        .taskbar-button {
            color: #d1d1d1;
            transition: color 0.3s, background-color 0.3s, transform 0.2s;
            position: relative;
            overflow: hidden;
        }
        .taskbar-button:hover {
            color: #00cc00;
            background-color: rgba(0, 204, 0, 0.1);
        }
        .taskbar-button:active {
            transform: scale(0.9);
            color: #00ff00;
            box-shadow: 0 0 15px #00cc00, inset 0 0 5px #00cc00;
        }
        .icon {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            width: 100px;
            height: 100px;
            margin: 10px;
            font-size: 20px;
            cursor: pointer;
            user-select: none;
            transition: transform 0.5s ease, box-shadow 0.5s ease;
            background-size: cover;
            background-position: center;
            border-radius: 15px;
        }
        .icon:hover {
            transform: scale(1.1) rotate(2deg);
            box-shadow: 0 8px 16px rgba(0, 0, 0, 0.4);
        }
        .icon:active {
            transform: scale(0.95) rotate(-2deg);
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        }
		.modal-overlay {
            background: rgba(0, 0, 0, 0.8);
            backdrop-filter: blur(15px);
        }
        .login-box {
            background: rgba(30, 30, 30, 0.8);
            box-shadow: 0 0 50px rgba(0, 255, 0, 0.5);
            border-radius: 12px;
        }
        .title {
            color: #00ff00;
            margin-bottom: 20px;
            font-size: 28px;
            text-shadow: 0 0 10px rgba(0, 255, 0, 1);
        }
        .password-input {
            background: rgba(255, 255, 255, 0.1);
            color: #ffffff;
            transition: background 0.3s, box-shadow 0.3s;
        }
        .password-input:focus {
            background: rgba(255, 255, 255, 0.2);
            box-shadow: 0 0 10px rgba(0, 255, 0, 0.7);
        }
        .login-button {
            background: linear-gradient(90deg, #00aaff, #0056b3);
            transition: background 0.4s, transform 0.2s, box-shadow 0.3s;
        }
        .login-button:hover {
            background: linear-gradient(90deg, #0056b3, #003d80);
            transform: translateY(-3px);
            box-shadow: 0 5px 15px rgba(0, 170, 255, 0.5);
        }
        .login-error {
            color: #ff4d4d;
            margin-top: 10px;
            animation: shake 0.5s;
        }
        @keyframes shake {
            0% { transform: translateX(0); }
            25% { transform: translateX(-5px); }
            50% { transform: translateX(5px); }
            75% { transform: translateX(-5px); }
            100% { transform: translateX(0); }
        }
		.settingsmain-menu {
			background: rgba(20, 20, 20, 0.9);
			border: 1px solid rgba(0, 255, 0, 0.3);
			box-shadow: 0 0 40px rgba(0, 255, 0, 0.5);
			transition: all 0.2s ease; /* Schneller */
			border-radius: 10px;
			animation: fadeIn 0.3s; /* Schneller */
		}

		@keyframes fadeIn {
			from { opacity: 0; transform: translateY(-10px); }
			to { opacity: 1; transform: translateY(0); }
		}

		.settingsmain-header {
			border-bottom: 2px solid rgba(0, 255, 0, 0.1);
			padding-bottom: 10px;
			margin-bottom: 20px;
			color: #e0e0e0;
		}

		.settingsmain-controls button {
			color: #ffffff;
			transition: transform 0.2s, color 0.2s; /* Schneller */
		}

		.settingsmain-controls button:hover {
			transform: scale(1.2);
			color: #00bfff;
		}

		.settingsmain-content {
			color: #d0d0d0;
			transition: color 0.2s; /* Schneller */
		}

		.settingsmain-option {
			padding: 10px;
			margin: 5px 0;
			background: rgba(60, 60, 60, 0.5);
			border-radius: 6px;
			transition: background 0.2s, transform 0.1s; /* Schneller */
		}

		.settingsmain-option:hover {
			background: rgba(80, 80, 80, 0.7);
			transform: translateY(-2px);
		}

		.settingsmain-option label {
			font-size: 18px;
			transition: color 0.2s; /* Schneller */
		}

		.settingsmain-option input {
			transform: scale(1.6);
			cursor: pointer;
			transition: transform 0.2s; /* Schneller */
		}

		.settingsmain-option input:hover {
			transform: scale(1.8);
		}

		.settingsmain-resize {
			background: rgba(255, 255, 255, 0.3);
		}

		.settingsmain-butten {
			background: linear-gradient(145deg, #444, #555);
			color: #f0f0f0;
			transition: background 0.2s, transform 0.2s, box-shadow 0.2s; /* Schneller */
		}

		.settingsmain-butten:hover {
			background: linear-gradient(145deg, #555, #666);
			transform: scale(1.05);
			box-shadow: 0 4px 20px rgba(255, 255, 255, 0.2);
		}

		.settingsmain-butten:focus {
			box-shadow: 0 0 0 2px rgba(0, 170, 255, 0.8);
			background: linear-gradient(145deg, #444, #555);
		}
		.resize-handle {
            position: absolute;
            bottom: -20px;
            right: 0;
            width: 20px;
            height: 20px;
            background-color: #1e1e1e;
            border-radius: 5px;
            cursor: se-resize;
            transition: transform 0.3s ease, background-color 0.3s ease, box-shadow 0.3s ease;
            box-shadow: 0 0 8px rgba(0, 255, 0, 0.7);
        }
        .resize-handle:hover {
            background-color: #2a2a2a;
            transform: scale(1.1) rotate(45deg);
        }
        .resize-handle:active {
            background-color: #444;
            transform: scale(1.2);
            box-shadow: 0 0 15px rgba(0, 255, 0, 0.8);
        }
        #selection-window {
            position: absolute;
            bottom: 20px;
            left: 50%;
            transform: translateX(-50%);
            background: rgba(20, 20, 20, 0.9);
            border: 2px solid rgba(0, 255, 0, 0.5);
            border-radius: 12px;
            box-shadow: 0 6px 12px rgba(0, 0, 0, 0.4), 0 0 20px rgba(0, 255, 0, 0.5);
            display: none;
            padding: 10px;
            box-sizing: border-box;
            width: 200px;  /* Beibehalten der ursprünglichen Größe */
            backdrop-filter: blur(10px);
            opacity: 0;
            transform: translateY(10px);
            transition: opacity 0.4s ease, transform 0.4s ease;
        }
        #selection-window.active {
            display: block;
            opacity: 1;
            transform: translateY(0);
        }
        #selection-window button {
            background: linear-gradient(145deg, #444, #555);
            border: none;
            color: #00ff00;
            padding: 8px 12px; /* Beibehalten der ursprünglichen Größe */
            margin-bottom: 5px;
            border-radius: 8px;
            cursor: pointer;
            font-size: 14px;  /* Beibehalten der ursprünglichen Größe */
            transition: background 0.3s, transform 0.2s, box-shadow 0.2s;
            width: 100%;
            position: relative; /* Für zusätzliche Animation */
            overflow: hidden; /* Um Überlauf zu verhindern */
        }
        #selection-window button:hover {
            background: linear-gradient(145deg, #555, #666);
            transform: scale(1.05) translateY(-2px);
            box-shadow: 0 4px 10px rgba(0, 255, 0, 0.6);
        }
        #selection-window button:focus {
            outline: none;
            box-shadow: 0 0 0 2px rgba(0, 255, 255, 0.6);
            background: linear-gradient(145deg, #444, #555);
        }
        @keyframes buttonClick {
            0% { transform: scale(1); }
            50% { transform: scale(0.95); }
            100% { transform: scale(1); }
        }
        #selection-window button:active {
            animation: buttonClick 0.2s ease;
        }

        /* Ähnliche Anpassungen für die anderen Fenster */
        #folsel-window {
            position: absolute;
            bottom: 20px;
            left: 60%;
            transform: translateX(-50%);
            background: rgba(20, 20, 20, 0.9);
            border: 2px solid rgba(0, 255, 0, 0.5);
            border-radius: 12px;
            box-shadow: 0 6px 12px rgba(0, 0, 0, 0.4), 0 0 20px rgba(0, 255, 0, 0.5);
            display: none;
            padding: 10px;
            box-sizing: border-box;
            width: 200px; /* Beibehalten der ursprünglichen Größe */
            backdrop-filter: blur(10px);
            opacity: 0;
            transform: translateY(10px);
            transition: opacity 0.4s ease, transform 0.4s ease;
        }
        #folsel-window.active {
            display: block;
            opacity: 1;
            transform: translateY(0);
        }
        #folsel-window button {
            background: linear-gradient(145deg, #444, #555);
            border: none;
            color: #00ff00;
            padding: 8px 12px; /* Beibehalten der ursprünglichen Größe */
            margin-bottom: 5px;
            border-radius: 8px;
            cursor: pointer;
            font-size: 14px;  /* Beibehalten der ursprünglichen Größe */
            transition: background 0.3s, transform 0.2s, box-shadow 0.2s;
            width: 100%;
            position: relative;
            overflow: hidden;
        }
        #folsel-window button:hover {
            background: linear-gradient(145deg, #555, #666);
            transform: scale(1.05) translateY(-2px);
            box-shadow: 0 4px 10px rgba(0, 255, 0, 0.6);
        }
        #folsel-window button:active {
            animation: buttonClick 0.2s ease;
        }

        #sysset-window {
            position: absolute;
            bottom: 20px;
            left: 70%;
            transform: translateX(-50%);
            background: rgba(20, 20, 20, 0.9);
            border: 2px solid rgba(0, 255, 0, 0.5);
            border-radius: 12px;
            box-shadow: 0 6px 12px rgba(0, 0, 0, 0.4), 0 0 20px rgba(0, 255, 0, 0.5);
            display: none;
            padding: 10px;
            box-sizing: border-box;
            width: 200px; /* Beibehalten der ursprünglichen Größe */
            backdrop-filter: blur(10px);
            opacity: 0;
            transform: translateY(10px);
            transition: opacity 0.4s ease, transform 0.4s ease;
        }
        #sysset-window.active {
            display: block;
            opacity: 1;
            transform: translateY(0);
        }
        #sysset-window button {
            background: linear-gradient(145deg, #444, #555);
            border: none;
            color: #00ff00;
            padding: 8px 12px; /* Beibehalten der ursprünglichen Größe */
            margin-bottom: 5px;
            border-radius: 8px;
            cursor: pointer;
            font-size: 14px;  /* Beibehalten der ursprünglichen Größe */
            transition: background 0.3s, transform 0.2s, box-shadow 0.2s;
            width: 100%;
            position: relative;
            overflow: hidden;
        }
        #sysset-window button:hover {
            background: linear-gradient(145deg, #555, #666);
            transform: scale(1.05) translateY(-2px);
            box-shadow: 0 4px 10px rgba(0, 255, 0, 0.6);
        }
        #sysset-window button:active {
            animation: buttonClick 0.2s ease;
        }
		#appsfinder-window {
			position: absolute;
			bottom: 70px;
			left: 7%;
			transform: translateX(-50%);
			background: rgba(20, 20, 20, 0.9);
			border: 2px solid rgba(0, 255, 0, 0.5);
			border-radius: 8px; /* Kleineren Radius */
			box-shadow: 0 6px 12px rgba(0, 0, 0, 0.4), 0 0 20px rgba(0, 255, 0, 0.5);
			display: none;
			padding: 10px; /* Weniger Padding */
			box-sizing: border-box;
			width: 200px; /* Kleinere Breite */
			backdrop-filter: blur(10px);
			transition: opacity 0.3s ease, transform 0.3s ease;
		}
        #appsfinder-window.active {
            display: block;
            opacity: 1;
        }
        #appsfinder-window button {
            display: flex;
            align-items: center;
            background: linear-gradient(145deg, #444, #555);
            border: none;
            color: #00ff00;
            padding: 10px 15px;
            margin-bottom: 8px;
            border-radius: 8px;
            cursor: pointer;
            font-size: 15px;
            transition: background 0.3s, transform 0.2s, box-shadow 0.2s;
            width: 100%;
        }
        .button-icon {
            width: 20px;
            height: 20px;
            margin-right: 8px;
            border-radius: 4px;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        #appsfinder-window button:hover .button-icon {
            transform: translateY(-2px) scale(1.1);
            box-shadow: 0 4px 10px rgba(0, 255, 0, 0.5);
        }
        #appsfinder-window button:hover {
            background: linear-gradient(145deg, #555, #666);
            transform: scale(1.1);
            box-shadow: 0 4px 10px rgba(0, 255, 0, 0.5);
        }
        #appsfinder-window button:focus {
            outline: none;
            box-shadow: 0 0 0 2px rgba(0, 255, 255, 0.6);
            background: linear-gradient(145deg, #444, #555);
        }
        @media (prefers-reduced-motion: no-preference) {
            #appsfinder-window {
                animation: fadeInUp 0.5s ease-out;
            }
        }
        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(20px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
    `;
	document.head.appendChild(style);
	const newRules = Array.from(style.sheet.cssRules);
	document.head.removeChild(style);

	function cssTextToObject(cssText) {
		return cssText
			.split(';')
			.map(rule => rule.trim().split(':'))
			.filter(rule => rule.length === 2)
			.reduce((acc, [property, value]) => {
				acc[property.trim()] = value.trim();
				return acc;
			}, {});
	}

	function mergeCSSRules(existingRules, newRules) {
		return { ...existingRules, ...newRules };
	}

	function objectToCSSText(cssObject) {
		return Object.entries(cssObject)
			.map(([property, value]) => `${property}: ${value};`)
			.join(' ');
	}

	function updateOrMergeRule(selector, ruleText, backupStyle) {
		const newRuleObject = cssTextToObject(ruleText.split('{')[1].split('}')[0]);

		let ruleUpdated = false;

		for (const sheet of document.styleSheets) {
			try {
				for (let i = 0; i < sheet.cssRules.length; i++) {
					const rule = sheet.cssRules[i];
					if (rule.selectorText === selector && rule.style) {
						const existingRuleObject = cssTextToObject(rule.style.cssText);
						const mergedRuleObject = mergeCSSRules(existingRuleObject, newRuleObject);
						const mergedRuleText = `${selector} { ${objectToCSSText(mergedRuleObject)} }`;
						sheet.deleteRule(i);
						sheet.insertRule(mergedRuleText, i);
						ruleUpdated = true;
						return;
					}
				}
			} catch (e) {
				console.warn("Zugriff auf Stylesheet nicht möglich:", e);
			}
		}

		if (!ruleUpdated) {
			backupStyle.appendChild(document.createTextNode(ruleText));
		}
	}

	const backupStyle = document.createElement('style');
	document.head.appendChild(backupStyle);

	for (const rule of newRules) {
		const selector = rule.selectorText;
		const ruleText = rule.cssText;
		updateOrMergeRule(selector, ruleText, backupStyle);
	}
}

function applyLoveTheme() {
	const style = document.createElement('style');
    style.innerHTML	= `
        .resize-handle {
            background-color: #ff4c4c;
        }
        .resize-handle:hover {
            background-color: #ff7070;
            transform: rotate(45deg) scale(1.1);
        }
        .resize-handle::before {
            border-color: #ffb3b3;
        }
        .resize-handle:hover::before {
            border-color: #ff9999;
        }
        #selection-window, #folsel-window, #sysset-window, #appsfinder-window {
            background: rgba(255, 100, 100, 0.9);
            border: 1px solid rgba(255, 255, 255, 0.5);
            box-shadow: 0 6px 12px rgba(255, 0, 0, 0.4), 0 0 16px rgba(255, 0, 0, 0.2);
            backdrop-filter: blur(12px);
        }
        #selection-window.active, #folsel-window.active, #sysset-window.active, #appsfinder-window.active {
            opacity: 0.9;
        }
        #selection-window button, #folsel-window button, #sysset-window button, #appsfinder-window button {
            background: linear-gradient(145deg, #ff4c4c, #ff6f6f);
            color: #fff;
        }
        #selection-window button:hover, #folsel-window button:hover, #sysset-window button:hover, #appsfinder-window button:hover {
            background: linear-gradient(145deg, #ff6f6f, #ff9f9f);
            transform: scale(1.05) rotate(2deg);
            box-shadow: 0 4px 15px rgba(255, 0, 0, 0.3);
        }
        #selection-window button:focus, #folsel-window button:focus, #sysset-window button:focus, #appsfinder-window button:focus {
            box-shadow: 0 0 0 2px rgba(255, 100, 255, 0.6);
        }
        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(20px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        @media (prefers-reduced-motion: no-preference) {
            #selection-window, #folsel-window, #sysset-window, #appsfinder-window {
                animation: fadeInUp 0.7s ease-out;
            }
        }
        .button-icon {
            background-color: #ff9999;
            transition: transform 0.5s ease, box-shadow 0.5s ease;
        }
        #appsfinder-window button:hover .button-icon {
            transform: translateY(-3px) scale(1.1);
        }

        .window-header {
            background-color: rgba(255, 0, 127, 0.7);
            color: #ff69b4;
            text-shadow: 0 0 5px #ff69b4, 0 0 10px #ff69b4, 0 0 15px #ff69b4;
        }
        .window-body {
            background-color: rgba(255, 228, 225, 0.9);
            color: #d5006d;
        }
        .window-footer {
            color: #ff69b4;
        }
        .icon span {
            color: #ff1493;
        }
        .error-message {
            background: #ffb3b3;
            color: #d5006d;
            text-shadow: 0 0 5px #ff1493, 0 0 10px #ff1493;
        }
        .error-message .ok-button {
            background: rgba(255, 105, 180, 0.7);
            color: #fff;
        }
        .error-message .ok-button:hover {
            background: rgba(255, 20, 147, 0.7);
        }
        .selected {
            border: 2px solid #ff1493;
            background-color: rgba(255, 20, 147, 0.2);
            border-radius: 0;
        }
        .file-label {
            color: #ff69b4;
        }
        .context-menu {
            background: rgba(255, 182, 193, 0.8);
            border-radius: 0;
        }
        .context-menu ul li {
            color: #d5006d;
            border-radius: 0;
        }
        .context-menu ul li:hover {
            background: rgba(255, 105, 180, 0.6);
        }
        .taskbar {
            background: linear-gradient(90deg, rgba(255, 105, 180, 0.8), rgba(255, 20, 147, 0.8));
            position: fixed;
            bottom: 10px;
            width: 100%;
            display: flex;
            align-items: center;
            padding: 0 20px;
            box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.5);
            z-index: 1000;
            border-radius: 0 0 20px 20px;
        }
        .taskbar-button {
            color: #fff;
            padding: 10px 20px;
            border: none;
            border-radius: 0;
            font-size: 14px;
            position: relative;
            cursor: pointer;
            transition: transform 0.3s, background-color 0.3s, color 0.3s;
            margin: 0 4px;
        }
        .taskbar-button:hover {
            background-color: rgba(255, 20, 147, 0.5);
            transform: scale(1.05) translateY(-2px);
            box-shadow: 0 0 20px rgba(255, 20, 147, 0.5);
            color: #fff;
        }
        .taskbar-button:active {
            transform: scale(0.95) translateY(2px);
            background-color: rgba(255, 20, 147, 0.7);
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
        }
        .icon:hover {
            transform: scale(1.1) rotate(3deg);
            box-shadow: 0 4px 12px rgba(255, 0, 127, 0.4);
        }

        @keyframes fadeIn {
            from {
                opacity: 0;
                transform: translate(-50%, -60%) scale(0.9);
            }
            to {
                opacity: 1;
                transform: translate(-50%, -50%) scale(1);
            }
        }
    `;

	document.head.appendChild(style);
	const newRules = Array.from(style.sheet.cssRules);
	document.head.removeChild(style);

	function cssTextToObject(cssText) {
		return cssText
			.split(';')
			.map(rule => rule.trim().split(':'))
			.filter(rule => rule.length === 2)
			.reduce((acc, [property, value]) => {
				acc[property.trim()] = value.trim();
				return acc;
			}, {});
	}

	function mergeCSSRules(existingRules, newRules) {
		return { ...existingRules, ...newRules };
	}

	function objectToCSSText(cssObject) {
		return Object.entries(cssObject)
			.map(([property, value]) => `${property}: ${value};`)
			.join(' ');
	}

	function updateOrMergeRule(selector, ruleText, backupStyle) {
		const newRuleObject = cssTextToObject(ruleText.split('{')[1].split('}')[0]);

		let ruleUpdated = false;

		for (const sheet of document.styleSheets) {
			try {
				for (let i = 0; i < sheet.cssRules.length; i++) {
					const rule = sheet.cssRules[i];
					if (rule.selectorText === selector && rule.style) {
						const existingRuleObject = cssTextToObject(rule.style.cssText);
						const mergedRuleObject = mergeCSSRules(existingRuleObject, newRuleObject);
						const mergedRuleText = `${selector} { ${objectToCSSText(mergedRuleObject)} }`;
						sheet.deleteRule(i);
						sheet.insertRule(mergedRuleText, i);
						ruleUpdated = true;
						return;
					}
				}
			} catch (e) {
				console.warn("Zugriff auf Stylesheet nicht möglich:", e);
			}
		}

		if (!ruleUpdated) {
			backupStyle.appendChild(document.createTextNode(ruleText));
		}
	}

	const backupStyle = document.createElement('style');
	document.head.appendChild(backupStyle);

	for (const rule of newRules) {
		const selector = rule.selectorText;
		const ruleText = rule.cssText;
		updateOrMergeRule(selector, ruleText, backupStyle);
	}
}

function applyNightTheme() {
    const style = document.createElement('style');
    style.innerHTML = `
        .window-header {
            background-color: rgba(5, 5, 5, 0.85);
            color: #0099ff;
            text-shadow: 0 0 8px #0099ff, 0 0 16px #0099ff;
            animation: headerGlow 1.5s infinite alternate ease-in-out;
        }
        @keyframes headerGlow {
            from { text-shadow: 0 0 8px #0099ff, 0 0 16px #0099ff; }
            to { text-shadow: 0 0 10px #66ccff, 0 0 20px #66ccff; }
        }

        .window-body {
            background-color: #1a1a1a;
            color: #dcdcdc;
            padding: 16px;
            border-radius: 8px;
            animation: fadeInBody 0.6s ease;
        }
        @keyframes fadeInBody {
            from { opacity: 0; }
            to { opacity: 1; }
        }

        .window-footer {
            background-color: rgba(10, 10, 10, 0.9);
            color: #0077ff;
            border-top: 1px solid #444;
        }

        .icon span {
            color: #f0f0f0;
            font-weight: bold;
            text-shadow: 0 0 5px #0099ff;
        }

        .icon {
            color: #f0f0f0;
            border-radius: 12px;
            box-shadow: 0 6px 12px rgba(0, 0, 0, 0.6);
            transition: transform 0.4s ease, box-shadow 0.4s ease, background-color 0.3s;
        }
        .icon:hover {
            transform: scale(1.1) rotate(3deg);
            box-shadow: 0 8px 16px rgba(0, 153, 255, 0.6);
            background-color: #1a1a1a;
        }
        .icon:active {
            transform: scale(0.95);
            background-color: #333;
        }

        .selected {
            border: 2px solid #3399ff;
            background-color: rgba(51, 153, 255, 0.3);
            animation: pulseBorder 1.2s infinite alternate;
        }
        @keyframes pulseBorder {
            from { border-color: #3399ff; }
            to { border-color: #66ccff; }
        }

        .error-message {
            background: rgba(20, 20, 20, 0.95);
            color: #3399ff;
            padding: 40px;
            border-radius: 14px;
            text-shadow: 0 0 10px #3399ff;
            box-shadow: 0 12px 28px rgba(0, 0, 0, 0.8);
            animation: fadeInError 0.5s ease, shakeError 0.3s ease 0.2s;
            transform: translate(-50%, -50%);
        }
        @keyframes fadeInError {
            from { opacity: 0; transform: translate(-50%, -60%) scale(0.8); }
            to { opacity: 1; transform: translate(-50%, -50%) scale(1); }
        }
        @keyframes shakeError {
            0%, 100% { transform: translate(-50%, -50%) rotate(-2deg); }
            50% { transform: translate(-50%, -50%) rotate(2deg); }
        }

        .error-message .ok-button {
            background: rgba(5, 5, 5, 0.8);
            border-radius: 8px;
            color: #d9d9d9;
            padding: 10px 25px;
            transition: background 0.4s, color 0.4s, transform 0.2s ease;
        }
        .error-message .ok-button:hover {
            background: rgba(51, 153, 255, 0.8);
            color: #ffffff;
            transform: translateY(-3px);
        }

        .taskbar {
            background-color: rgba(10, 10, 10, 0.9);
            color: #cccccc;
            box-shadow: 0 -1px 8px rgba(0, 0, 0, 0.3);
            backdrop-filter: blur(6px);
            transition: background-color 0.3s;
        }
        .taskbar:hover {
            background-color: rgba(15, 15, 15, 0.95);
        }
        
        .taskbar-button {
            color: #bbbbbb;
            background: transparent;
            padding: 10px 18px;
            font-size: 15px;
            transition: transform 0.3s, color 0.3s ease-in;
        }
        .taskbar-button:hover {
            color: #3399ff;
            background-color: rgba(51, 153, 255, 0.15);
            transform: translateY(-3px);
        }
        .taskbar-button:active {
            color: #3399ff;
            transform: scale(0.9);
        }

        .file-label {
            color: #3399ff;
            text-shadow: 0 0 6px #3399ff;
            font-weight: 700;
        }

        .context-menu {
            background: rgba(5, 5, 5, 0.8);
            border-radius: 12px;
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.5);
            backdrop-filter: blur(8px);
            overflow: hidden;
        }
        .context-menu ul li {
            padding: 10px 15px;
            background: rgba(5, 5, 5, 0.7);
            color: #e6e6e6;
            transition: background 0.3s ease, color 0.3s ease;
        }
        .context-menu ul li:hover {
            background: rgba(0, 102, 204, 0.6);
            color: #ffffff;
            text-shadow: 0 0 6px #0099ff, 0 0 12px #0099ff;
        }
        .context-menu ul li:active {
            background: rgba(0, 102, 204, 0.8);
            color: #ffffff;
        }

        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(-10px); }
            to { opacity: 1; transform: translateY(0); }
        }
		.modal-overlay {
            background: rgba(0, 0, 0, 0.95);
            backdrop-filter: blur(15px);
        }
        .login-box {
            background: rgba(40, 40, 40, 0.9);
            border-radius: 12px;
            box-shadow: 0 0 60px rgba(0, 255, 255, 0.6);
            transition: transform 0.3s;
        }
        .login-box:hover {
            transform: scale(1.02);
        }
        .title {
            color: #e0e0e0;
            text-shadow: 0 0 10px rgba(0, 255, 255, 0.5);
        }
        .password-input {
            background: rgba(255, 255, 255, 0.15);
            color: #fff;
            transition: background 0.4s, box-shadow 0.4s, transform 0.4s;
        }
        .password-input:focus {
            background: rgba(255, 255, 255, 0.25);
            box-shadow: 0 0 10px rgba(0, 123, 255, 0.7);
            transform: scale(1.01);
        }
        .login-button {
            background: linear-gradient(90deg, #007bff, #0056b3);
            transition: background 0.4s, transform 0.3s, box-shadow 0.3s;
        }
        .login-button:hover {
            background: linear-gradient(90deg, #0056b3, #003d80);
            transform: translateY(-4px);
            box-shadow: 0 6px 30px rgba(0, 123, 255, 0.5);
        }
        .login-error {
            color: #ff4d4d;
            animation: shake 0.5s ease-in-out;
        }
        @keyframes shake {
            0%, 100% { transform: translateX(0); }
            25% { transform: translateX(-5px); }
            50% { transform: translateX(5px); }
            75% { transform: translateX(-5px); }
        }
        .settingsmain-menu {
            background: rgba(25, 25, 25, 0.9);
            border: 1px solid rgba(255, 255, 255, 0.3);
            box-shadow: 0 0 60px rgba(0, 255, 255, 0.6);
            transition: all 0.5s ease;
            border-radius: 10px;
            animation: fadeIn 0.5s;
        }
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(-15px); }
            to { opacity: 1; transform: translateY(0); }
        }
        .settingsmain-header {
            border-bottom: 2px solid rgba(255, 255, 255, 0.1);
            padding-bottom: 15px;
            margin-bottom: 25px;
            color: #e0e0e0;
            text-shadow: 0 0 5px rgba(0, 255, 255, 0.4);
        }
        .settingsmain-controls button {
            color: #ffffff;
            transition: transform 0.3s, color 0.3s, background 0.3s;
        }
        .settingsmain-controls button:hover {
            transform: scale(1.2);
            color: #00bfff;
            background: rgba(0, 255, 255, 0.2);
        }
        .settingsmain-content {
            color: #d0d0d0;
            transition: color 0.3s;
            animation: fadeIn 0.5s;
        }
        .settingsmain-option {
            padding: 12px;
            margin: 5px 0;
            background: rgba(60, 60, 60, 0.5);
            border-radius: 6px;
            transition: background 0.3s, transform 0.3s, box-shadow 0.3s;
            box-shadow: 0 0 10px rgba(255, 255, 255, 0.1);
        }
        .settingsmain-option:hover {
            background: rgba(80, 80, 80, 0.7);
            transform: translateY(-3px);
            box-shadow: 0 4px 20px rgba(0, 255, 255, 0.5);
        }
        .settingsmain-option label {
            font-size: 20px;
            transition: color 0.3s;
        }
        .settingsmain-option input {
            transform: scale(1.6);
            cursor: pointer;
            transition: transform 0.3s, box-shadow 0.3s;
        }
        .settingsmain-option input:hover {
            transform: scale(1.8);
            box-shadow: 0 0 8px rgba(0, 255, 255, 0.5);
        }
        .settingsmain-resize {
            background: rgba(255, 255, 255, 0.3);
            transition: background 0.3s;
        }
        .settingsmain-resize:hover {
            background: rgba(255, 255, 255, 0.5);
        }
        .settingsmain-butten {
            background: linear-gradient(145deg, #444, #555);
            color: #f0f0f0;
            transition: background 0.4s, transform 0.3s, box-shadow 0.3s;
            border-radius: 8px;
        }
        .settingsmain-butten:hover {
            background: linear-gradient(145deg, #555, #666);
            transform: scale(1.05);
            box-shadow: 0 4px 20px rgba(255, 255, 255, 0.3);
        }
        .settingsmain-butten:focus {
            box-shadow: 0 0 0 2px rgba(0, 170, 255, 0.8);
            background: linear-gradient(145deg, #444, #555);
        }
		.resize-handle {
            background-color: rgba(60, 60, 60, 0.9);
            transition: transform 0.3s ease, background-color 0.3s ease, box-shadow 0.3s ease;
        }
        .resize-handle:hover {
            background-color: rgba(80, 80, 80, 0.9);
            transform: rotate(45deg) scale(1.1);
            box-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
        }
        .resize-handle::before {
            border: 2px solid rgba(200, 200, 200, 0.8);
        }
        .resize-handle:hover::before {
            border-color: rgba(250, 250, 250, 0.8);
        }
        .resize-handle:active {
            background-color: rgba(100, 100, 100, 0.9);
            transform: scale(1.15);
            box-shadow: 0 0 15px rgba(255, 255, 255, 0.7);
        }
        
        #selection-window, #folsel-window, #sysset-window, #appsfinder-window {
            background: rgba(20, 20, 20, 0.9);
            border: 1px solid rgba(255, 255, 255, 0.3);
            animation: slideInUp 0.5s ease;
        }
        
        #selection-window button, #folsel-window button, #sysset-window button, #appsfinder-window button {
            background: linear-gradient(145deg, rgba(50, 50, 50, 1), rgba(60, 60, 60, 1));
            transition: background 0.4s, transform 0.4s, box-shadow 0.4s, filter 0.4s;
        }
        
        #selection-window button:hover,
        #folsel-window button:hover,
        #sysset-window button:hover,
        #appsfinder-window button:hover {
            background: linear-gradient(145deg, rgba(60, 60, 60, 1), rgba(70, 70, 70, 1));
            transform: translateY(-3px) scale(1.05);
            box-shadow: 0 4px 20px rgba(255, 255, 255, 0.4);
            filter: brightness(1.1);
        }

        #selection-window button:focus,
        #folsel-window button:focus,
        #sysset-window button:focus,
        #appsfinder-window button:focus {
            outline: none;
            box-shadow: 0 0 0 2px rgba(0, 170, 255, 0.8);
            background: linear-gradient(145deg, rgba(50, 50, 50, 1), rgba(60, 60, 60, 1));
        }
        
        @keyframes slideInUp {
            from {
                opacity: 0;
                transform: translateY(20px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
    `;
	document.head.appendChild(style);
	const newRules = Array.from(style.sheet.cssRules);
	document.head.removeChild(style);

	function cssTextToObject(cssText) {
		return cssText
			.split(';')
			.map(rule => rule.trim().split(':'))
			.filter(rule => rule.length === 2)
			.reduce((acc, [property, value]) => {
				acc[property.trim()] = value.trim();
				return acc;
			}, {});
	}

	function mergeCSSRules(existingRules, newRules) {
		return { ...existingRules, ...newRules };
	}

	function objectToCSSText(cssObject) {
		return Object.entries(cssObject)
			.map(([property, value]) => `${property}: ${value};`)
			.join(' ');
	}

	function updateOrMergeRule(selector, ruleText, backupStyle) {
		const newRuleObject = cssTextToObject(ruleText.split('{')[1].split('}')[0]);

		let ruleUpdated = false;

		for (const sheet of document.styleSheets) {
			try {
				for (let i = 0; i < sheet.cssRules.length; i++) {
					const rule = sheet.cssRules[i];
					if (rule.selectorText === selector && rule.style) {
						const existingRuleObject = cssTextToObject(rule.style.cssText);
						const mergedRuleObject = mergeCSSRules(existingRuleObject, newRuleObject);
						const mergedRuleText = `${selector} { ${objectToCSSText(mergedRuleObject)} }`;
						sheet.deleteRule(i);
						sheet.insertRule(mergedRuleText, i);
						ruleUpdated = true;
						return;
					}
				}
			} catch (e) {
				console.warn("Zugriff auf Stylesheet nicht möglich:", e);
			}
		}

		if (!ruleUpdated) {
			backupStyle.appendChild(document.createTextNode(ruleText));
		}
	}

	const backupStyle = document.createElement('style');
	document.head.appendChild(backupStyle);

	for (const rule of newRules) {
		const selector = rule.selectorText;
		const ruleText = rule.cssText;
		updateOrMergeRule(selector, ruleText, backupStyle);
	}
}

function applyRetroTheme() {
    const styles = {
        '.window-header': {
            'background-color': 'rgba(255, 204, 0, 0.8)',
            'color': '#000',
            'text-shadow': '0 0 3px #ffcc00, 0 0 6px #ffcc00, 0 0 9px #ffcc00',
            'padding': '10px',
            'animation': 'pop 0.5s ease-in-out',
        },
        '.window-body': {
            'background-color': '#f7f7f7',
            'color': '#000',
            'padding': '15px',
            'border': '2px dashed #ffcc00',
            'animation': 'fadeIn 0.5s ease-in-out',
        },
        '.window-footer': {
            'background-color': '#f7f7f7',
            'text-align': 'center',
            'padding': '10px',
            'font-weight': 'bold',
        },
        '.icon span': {
            'color': '#000',
            'text-shadow': '0 0 3px #ffcc00, 0 0 6px #ffcc00',
        },
        '.error-message': {
            'background': '#ffcc00',
            'color': '#000',
            'text-shadow': 'none',
            'border-radius': '15px',
            'box-shadow': '0 4px 10px rgba(0, 0, 0, 0.5)',
            'animation': 'bounce 0.5s ease-in-out',
        },
        '.error-message span': {
            'font-size': '20px',
        },
        '.error-message .ok-button': {
            'background': '#000',
            'color': '#ffcc00',
            'border': '2px solid #ffcc00',
            'transition': 'transform 0.2s',
        },
        '.error-message .ok-button:hover': {
            'transform': 'scale(1.1)',
        },
        '.selected': {
            'border': '2px solid #cc6600',
            'background-color': 'rgba(204, 102, 0, 0.3)',
        },
        '.file-label': {
            'color': '#cc6600',
            'font-weight': 'bold',
            'text-shadow': '0 0 3px #cc6600',
        },
        '.context-menu': {
            'background': 'rgba(255, 204, 0, 0.8)',
            'box-shadow': '0 4px 8px rgba(0, 0, 0, 0.5)',
            'animation': 'slideIn 0.3s ease-in-out',
        },
        '.context-menu ul li': {
            'background': 'rgba(255, 204, 0, 0.6)',
            'color': '#000',
            'transition': 'background 0.2s, color 0.2s',
        },
        '.context-menu ul li:hover': {
            'background': 'rgba(255, 204, 0, 0.7)',
            'color': '#fff',
            'text-shadow': '0 0 8px #ffcc00',
        },
        '.taskbar': {
            'background-color': '#cc6600',
            'color': '#fff',
            'box-shadow': '0 -1px 4px rgba(0, 0, 0, 0.5)',
        },
        '.taskbar-button': {
            'color': '#ffcc00',
            'transition': 'color 0.3s, background-color 0.3s, transform 0.2s',
        },
        '.taskbar-button:hover': {
            'color': '#000',
            'background-color': '#ffcc00',
        },
        '.icon': {
            'background-color': '#fff',
            'border-radius': '8px',
            'animation': 'scaleUp 0.3s ease-in-out',
        },
    };

    for (const selector in styles) {
        const elements = document.querySelectorAll(selector);
        elements.forEach((element) => {
            for (const property in styles[selector]) {
                element.style[property] = styles[selector][property];
            }
        });
    }

    const keyframes = `
        @keyframes pop {
            0% { transform: scale(0.8); }
            50% { transform: scale(1.1); }
            100% { transform: scale(1); }
        }
        @keyframes fadeIn {
            0% { opacity: 0; }
            100% { opacity: 1; }
        }
        @keyframes bounce {
            0% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
            100% { transform: translateY(0); }
        }
        @keyframes slideIn {
            0% { transform: translateY(-20px); opacity: 0; }
            100% { transform: translateY(0); opacity: 1; }
        }
        @keyframes scaleUp {
            0% { transform: scale(0.9); }
            100% { transform: scale(1); }
        }
    `;

    const styleSheet = document.createElement("style");
    styleSheet.type = "text/css";
    styleSheet.innerText = keyframes;
    document.head.appendChild(styleSheet);
}

function applyCyberpunkTheme() {
    const style = document.createElement('style');
    style.innerHTML = `
        .resize-handle {
            background-color: #00ffcc;
            border: 2px solid #ff0057;
            transition: transform 0.4s ease, background-color 0.4s ease;
        }
        .resize-handle:hover {
            background-color: #ff0057;
            transform: rotate(45deg) scale(1.1);
        }
        .resize-handle::before {
            border-color: #00ffcc;
            transition: border-color 0.4s ease;
        }
        .resize-handle:hover::before {
            border-color: #ff0057;
        }
        #selection-window, #folsel-window, #sysset-window, #appsfinder-window {
            background: rgba(10, 10, 10, 0.9);
            border: 1px solid rgba(0, 255, 255, 0.5);
            box-shadow: 0 8px 16px rgba(0, 0, 0, 0.6), 0 0 20px rgba(0, 255, 255, 0.3);
            backdrop-filter: blur(12px);
            transition: opacity 0.4s ease, transform 0.4s ease;
        }
        #selection-window.active, #folsel-window.active, #sysset-window.active, #appsfinder-window.active {
            opacity: 1;
        }
        #selection-window button, #folsel-window button, #sysset-window button, #appsfinder-window button {
            background: linear-gradient(145deg, #1f1f1f, #2f2f2f);
            border: none;
            color: #00ffcc;
            box-shadow: 0 4px 8px rgba(0, 255, 255, 0.4);
            transition: background 0.4s, transform 0.3s, box-shadow 0.3s;
        }
        #selection-window button:hover, #folsel-window button:hover, #sysset-window button:hover, #appsfinder-window button:hover {
            background: linear-gradient(145deg, #2f2f2f, #3f3f3f);
            transform: scale(1.1);
            box-shadow: 0 6px 12px rgba(0, 255, 255, 0.6);
        }
        #selection-window button:focus, #folsel-window button:focus, #sysset-window button:focus, #appsfinder-window button:focus {
            outline: none;
            box-shadow: 0 0 0 2px rgba(0, 255, 255, 0.8);
        }
        @keyframes fadeInUp {
            0% {
                opacity: 0;
                transform: translateY(20px) scale(0.9);
            }
            100% {
                opacity: 1;
                transform: translateY(0) scale(1);
            }
        }
        @media (prefers-reduced-motion: no-preference) {
            #selection-window, #folsel-window, #sysset-window, #appsfinder-window {
                animation: fadeInUp 0.6s ease-out;
            }
        }
		.modal-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.85);
            backdrop-filter: blur(15px);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 9999;
            animation: fadeIn 0.3s ease;
        }
        .login-box {
            background: rgba(30, 30, 30, 0.9);
            border-radius: 16px;
            padding: 40px;
            box-shadow: 0 0 40px rgba(0, 255, 0, 0.3);
            text-align: center;
            width: 380px;
            backdrop-filter: blur(20px);
            animation: zoomIn 0.3s ease;
        }
        .title {
            color: #00ffcc;
            margin-bottom: 20px;
            font-size: 28px;
            text-shadow: 0 0 10px rgba(0, 255, 204, 0.8);
        }
        .password-input {
            width: 100%;
            padding: 12px;
            margin: 10px 0;
            border: none;
            border-radius: 8px;
            background: rgba(50, 50, 50, 0.7);
            color: #ffffff;
            font-size: 16px;
            transition: background 0.3s, box-shadow 0.3s;
        }
        .password-input:focus {
            background: rgba(70, 70, 70, 0.9);
            box-shadow: 0 0 10px rgba(0, 255, 204, 0.7);
            outline: none;
        }
        .login-button {
            padding: 14px 22px;
            border: none;
            border-radius: 8px;
            background: linear-gradient(90deg, #ff007f, #ff3d00);
            color: #ffffff;
            cursor: pointer;
            font-size: 18px;
            transition: background 0.3s, transform 0.2s;
            box-shadow: 0 0 15px rgba(255, 0, 127, 0.5);
        }
        .login-button:hover {
            background: linear-gradient(90deg, #ff3d00, #ff007f);
            transform: translateY(-3px) scale(1.05);
        }
        .login-error {
            color: #ff4d4d;
            margin-top: 10px;
            animation: shake 0.5s ease;
        }
        .settingsmain-menu {
            position: absolute;
            top: 15%;
            left: 15%;
            width: 420px;
            height: auto;
            backdrop-filter: blur(12px);
            background: rgba(20, 20, 20, 0.85);
            border: 1px solid rgba(0, 255, 204, 0.5);
            box-shadow: 0 0 30px rgba(0, 255, 0, 0.4);
            padding: 25px;
            display: none;
            transition: all 0.3s ease;
            animation: slideIn 0.3s ease;
        }
        .settingsmain-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            cursor: move;
            animation: fadeIn 0.5s ease;
        }
        .settingsmain-controls button {
            background: transparent;
            border: none;
            color: #00ffcc;
            font-size: 24px;
            cursor: pointer;
            transition: transform 0.2s, color 0.3s;
        }
        .settingsmain-controls button:hover {
            transform: scale(1.2);
            color: #ff00ff;
        }
        .settingsmain-content {
            margin-top: 20px;
        }
        .settingsmain-option {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin: 15px 0;
            animation: fadeIn 0.3s ease;
        }
        .settingsmain-option label {
            font-size: 18px;
            color: #00ffcc;
        }
        .settingsmain-option input {
            transform: scale(1.5);
            cursor: pointer;
            transition: transform 0.2s;
        }
        .settingsmain-option input:hover {
            transform: scale(1.7);
        }
        .settingsmain-resize {
            width: 15px;
            height: 15px;
            background: rgba(255, 0, 127, 0.7);
            border-radius: 50%;
            position: absolute;
            bottom: 10px;
            right: 10px;
            cursor: nwse-resize;
            transition: background 0.3s;
        }
        .settingsmain-resize:hover {
            background: rgba(255, 0, 127, 0.9);
        }
        .settingsmain-butten {
            background: linear-gradient(145deg, #444, #555);
            border: none;
            color: #f0f0f0;
            padding: 10px 16px;
            margin-bottom: 8px;
            border-radius: 8px;
            cursor: pointer;
            font-size: 14px;
            transition: background 0.3s, transform 0.2s, box-shadow 0.2s;
            width: 100%;
            box-shadow: 0 0 10px rgba(0, 255, 0, 0.3);
        }
        .settingsmain-butten:hover {
            background: linear-gradient(145deg, #555, #666);
            transform: scale(1.05);
            box-shadow: 0 4px 15px rgba(0, 255, 0, 0.5);
        }
        .settingsmain-butten:focus {
            outline: none;
            box-shadow: 0 0 0 2px rgba(0, 170, 255, 0.6);
            background: linear-gradient(145deg, #444, #555);
        }
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(-20px); }
            to { opacity: 1; transform: translateY(0); }
        }
        @keyframes zoomIn {
            from { transform: scale(0); }
            to { transform: scale(1); }
        }
        @keyframes slideIn {
            from { transform: translateY(-100%); }
            to { transform: translateY(0); }
        }
        @keyframes shake {
            0%, 100% { transform: translateX(0); }
            25% { transform: translateX(-5px); }
            50% { transform: translateX(5px); }
            75% { transform: translateX(-5px); }
        }
		.window-header {
            background-color: rgba(10, 10, 20, 0.9);
            color: #00ffcc;
            text-shadow: 0 0 5px #00ffcc, 0 0 10px #00ffcc, 0 0 20px #00ffcc;
            padding: 5px;
            cursor: move;
            display: flex;
            justify-content: space-between;
            align-items: center;
            animation: slideDown 0.5s ease-in-out;
        }
        .window-body {
            flex: 1;
            padding: 10px;
            background: rgba(20, 20, 30, 0.8);
            border-radius: 8px;
        }
        .window-footer {
            padding: 5px;
            text-align: right;
            border-top: 1px solid #00ffcc;
        }
        .icon span {
            position: absolute;
            bottom: 0;
            left: 50%;
            transform: translateX(-50%);
            text-align: center;
            color: #ffffff;
        }
        .error-message {
            background: rgba(0, 0, 0, 0.9);
            color: #ff0033;
            text-shadow: 0 0 5px #ff0033, 0 0 10px #ff0033;
            padding: 30px 50px;
            border-radius: 12px;
            box-shadow: 0 8px 30px rgba(0, 0, 0, 0.5);
            z-index: 1000;
            animation: zoomIn 0.5s ease-in-out;
        }
        .error-message span {
            font-size: 18px;
            text-align: center;
        }
        .error-message .ok-button {
            background: rgba(0, 0, 0, 0.6);
            border: none;
            color: #ffffff;
            border-radius: 6px;
            font-size: 16px;
            transition: background 0.3s, transform 0.2s;
        }
        .error-message .ok-button:hover {
            background: rgba(10, 10, 10, 0.8);
            transform: translateY(-2px);
        }
        @keyframes fadeIn {
            from { opacity: 0; transform: translate(-50%, -60%); }
            to { opacity: 1; transform: translate(-50%, -50%); }
        }
        @keyframes zoomIn {
            from { transform: scale(0); }
            to { transform: scale(1); }
        }
        @keyframes slideDown {
            from { transform: translateY(-100%); }
            to { transform: translateY(0); }
        }
        .selected {
            border: 2px solid #ff00cc;
            background-color: rgba(255, 0, 204, 0.3);
            border-radius: 3px;
        }
        .file-label {
            font-size: 12px;
            color: #ff00cc;
            font-weight: bold;
            text-shadow: 0 0 5px #ff00cc;
        }
        .context-menu {
            background: rgba(0, 0, 0, 0.9);
            border-radius: 10px;
            box-shadow: 0 8px 30px rgba(0, 0, 0, 0.5);
            display: none;
            z-index: 100;
            width: 120px;
            animation: fadeIn 0.2s ease-out;
        }
        .context-menu ul {
            list-style: none;
            padding: 0;
            margin: 0;
        }
        .context-menu ul li {
            padding: 10px;
            cursor: pointer;
            color: #d0ffd0;
            background: rgba(10, 10, 20, 0.7);
            border-radius: 6px;
            transition: background 0.3s, color 0.3s;
        }
        .context-menu ul li:hover {
            background: rgba(20, 20, 30, 0.8);
            color: #ffffff;
            text-shadow: 0 0 8px #00ff99;
        }
        .context-menu ul li:active {
            background: rgba(10, 10, 20, 0.9);
            color: #ffffff;
            text-shadow: 0 0 5px #00ff99;
        }
        .taskbar {
            background-color: #1f1f1f;
            color: #d1d1d1;
            height: 44px;
            position: fixed;
            bottom: 0;
            width: 100%;
            display: flex;
            align-items: center;
            padding: 0 10px;
            box-shadow: 0 -1px 8px rgba(0, 0, 0, 0.5);
            z-index: 1000;
        }
        .taskbar-button {
            color: #d1d1d1;
            padding: 10px 20px;
            border: none;
            font-size: 14px;
            position: relative;
            cursor: pointer;
            transition: color 0.3s, background-color 0.3s, transform 0.2s;
        }
        .taskbar-button::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 50%;
            width: 0;
            height: 3px;
            background: #00ffcc;
            transition: width 0.3s, left 0.3s;
        }
        .taskbar-button:hover {
            color: #ff00ff;
            background-color: rgba(255, 0, 255, 0.1);
        }
        .taskbar-button:hover::after {
            width: 100%;
            left: 0;
        }
        .taskbar-button:active {
            transform: scale(0.95);
            color: #ff00ff;
        }
        .icon {
            color: #ffffff;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
            border-radius: 12px;
        }
        .icon:hover {
            transform: scale(1.1);
            box-shadow: 0 4px 20px rgba(0, 255, 255, 0.5);
        }
    `;
	document.head.appendChild(style);
	const newRules = Array.from(style.sheet.cssRules);
	document.head.removeChild(style);

	function cssTextToObject(cssText) {
		return cssText
			.split(';')
			.map(rule => rule.trim().split(':'))
			.filter(rule => rule.length === 2)
			.reduce((acc, [property, value]) => {
				acc[property.trim()] = value.trim();
				return acc;
			}, {});
	}

	function mergeCSSRules(existingRules, newRules) {
		return { ...existingRules, ...newRules };
	}

	function objectToCSSText(cssObject) {
		return Object.entries(cssObject)
			.map(([property, value]) => `${property}: ${value};`)
			.join(' ');
	}

	function updateOrMergeRule(selector, ruleText, backupStyle) {
		const newRuleObject = cssTextToObject(ruleText.split('{')[1].split('}')[0]);

		let ruleUpdated = false;

		for (const sheet of document.styleSheets) {
			try {
				for (let i = 0; i < sheet.cssRules.length; i++) {
					const rule = sheet.cssRules[i];
					if (rule.selectorText === selector && rule.style) {
						const existingRuleObject = cssTextToObject(rule.style.cssText);
						const mergedRuleObject = mergeCSSRules(existingRuleObject, newRuleObject);
						const mergedRuleText = `${selector} { ${objectToCSSText(mergedRuleObject)} }`;
						sheet.deleteRule(i);
						sheet.insertRule(mergedRuleText, i);
						ruleUpdated = true;
						return;
					}
				}
			} catch (e) {
				console.warn("Zugriff auf Stylesheet nicht möglich:", e);
			}
		}

		if (!ruleUpdated) {
			backupStyle.appendChild(document.createTextNode(ruleText));
		}
	}

	const backupStyle = document.createElement('style');
	document.head.appendChild(backupStyle);

	for (const rule of newRules) {
		const selector = rule.selectorText;
		const ruleText = rule.cssText;
		updateOrMergeRule(selector, ruleText, backupStyle);
	}
}

//-------live-wallpaper----------------------------------------------------------------------------------------

function pulsatingNeonWallpaper() {
    const desktop = document.querySelector('.desktop');
    desktop.style.background = 'none';

    const wallpaperLayer = document.createElement('div');
    wallpaperLayer.style.position = 'fixed';
    wallpaperLayer.style.top = '0';
    wallpaperLayer.style.left = '0';
    wallpaperLayer.style.width = '100%';
    wallpaperLayer.style.height = '100%';
    wallpaperLayer.style.pointerEvents = 'none';
    wallpaperLayer.style.zIndex = '-1';

    document.body.appendChild(wallpaperLayer);
    
    const canvas = document.createElement('canvas');
    canvas.id = 'liveWallpaperCanvas';
    wallpaperLayer.appendChild(canvas);

    const ctx = canvas.getContext('2d');

    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    const numLines = 100;
    const lines = [];

    for (let i = 0; i < numLines; i++) {
        lines.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            length: Math.random() * 100 + 50,
            angle: Math.random() * Math.PI * 2,
            speed: Math.random() * 2 + 1,
            color: `hsl(${Math.random() * 360}, 100%, 50%)`
        });
    }

    function draw() {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        lines.forEach(line => {
            ctx.strokeStyle = line.color;
            ctx.lineWidth = 2;

            const xEnd = line.x + Math.cos(line.angle) * line.length;
            const yEnd = line.y + Math.sin(line.angle) * line.length;

            ctx.beginPath();
            ctx.moveTo(line.x, line.y);
            ctx.lineTo(xEnd, yEnd);
            ctx.stroke();
            ctx.closePath();

            line.x += Math.cos(line.angle) * line.speed;
            line.y += Math.sin(line.angle) * line.speed;

            if (line.x < 0 || line.x > canvas.width || line.y < 0 || line.y > canvas.height) {
                line.angle += Math.PI;
            }
        });

        requestAnimationFrame(draw);
    }

    draw();
}

function futuristicCyberpunkWallpaper() {
    const desktop = document.querySelector('.desktop');
    desktop.style.background = 'none';

    const wallpaperLayer = document.createElement('div');
    wallpaperLayer.style.position = 'fixed';
    wallpaperLayer.style.top = '0';
    wallpaperLayer.style.left = '0';
    wallpaperLayer.style.width = '100%';
    wallpaperLayer.style.height = '100%';
    wallpaperLayer.style.pointerEvents = 'none';
    wallpaperLayer.style.zIndex = '-1';

    document.body.appendChild(wallpaperLayer);
    
    const canvas = document.createElement('canvas');
    canvas.id = 'liveWallpaperCanvas';
    wallpaperLayer.appendChild(canvas);

    const ctx = canvas.getContext('2d');

    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    const numShapes = 100;
    const shapes = [];

    for (let i = 0; i < numShapes; i++) {
        shapes.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            size: Math.random() * 10 + 5,
            speedX: Math.random() * 4 - 2,
            speedY: Math.random() * 4 - 2,
            color: `hsl(${Math.random() * 40 + 200}, 100%, 50%)`,
            alpha: Math.random() * 0.5 + 0.3
        });
    }

    function draw() {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        shapes.forEach(shape => {
            ctx.fillStyle = `rgba(${parseInt(shape.color.slice(4, shape.color.indexOf(',')))}, ${parseInt(shape.color.slice(shape.color.indexOf(',') + 1, shape.color.lastIndexOf(',')))}, ${parseInt(shape.color.slice(shape.color.lastIndexOf(',') + 1, shape.color.indexOf(')')))}, ${shape.alpha})`;

            ctx.beginPath();
            ctx.arc(shape.x, shape.y, shape.size, 0, Math.PI * 2);
            ctx.fill();
            ctx.closePath();

            shape.x += shape.speedX;
            shape.y += shape.speedY;

            if (shape.x < 0 || shape.x > canvas.width) {
                shape.speedX *= -1;
            }
            if (shape.y < 0 || shape.y > canvas.height) {
                shape.speedY *= -1;
            }
        });

        ctx.strokeStyle = 'rgba(255, 100, 200, 0.5)';
        ctx.lineWidth = 2;
        for (let i = 0; i < shapes.length; i++) {
            for (let j = i + 1; j < shapes.length; j++) {
                const dx = shapes[i].x - shapes[j].x;
                const dy = shapes[i].y - shapes[j].y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                if (distance < 100) {
                    ctx.beginPath();
                    ctx.moveTo(shapes[i].x, shapes[i].y);
                    ctx.lineTo(shapes[j].x, shapes[j].y);
                    ctx.stroke();
                    ctx.closePath();
                }
            }
        }

        requestAnimationFrame(draw);
    }

    draw();
}

function loveWallpaper() {
    const desktop = document.querySelector('.desktop');
    desktop.style.background = 'none';

    const wallpaperLayer = document.createElement('div');
    wallpaperLayer.style.position = 'fixed';
    wallpaperLayer.style.top = '0';
    wallpaperLayer.style.left = '0';
    wallpaperLayer.style.width = '100%';
    wallpaperLayer.style.height = '100%';
    wallpaperLayer.style.pointerEvents = 'none';
    wallpaperLayer.style.zIndex = '-1';

    document.body.appendChild(wallpaperLayer);
    
    const canvas = document.createElement('canvas');
    canvas.id = 'liveWallpaperCanvas';
    wallpaperLayer.appendChild(canvas);

    const ctx = canvas.getContext('2d');

    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    const numHearts = 100;
    const hearts = [];

    for (let i = 0; i < numHearts; i++) {
        hearts.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height + canvas.height,
            size: Math.random() * 25 + 15,
            speedY: Math.random() * 1 + 0.5,
            color: `rgba(255, 105, 180, 0.8)`
        });
    }

    function drawHeart(ctx, x, y, size) {
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.bezierCurveTo(x, y - size * 0.4, x - size * 0.4, y, x, y + size * 0.5);
        ctx.bezierCurveTo(x + size * 0.4, y, x, y - size * 0.4, x, y);
        ctx.fillStyle = 'rgba(255, 105, 180, 0.8)';
        ctx.fill();
        ctx.closePath();
    }

    function draw() {
        ctx.fillStyle = 'rgba(30, 30, 30, 0.95)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        hearts.forEach(heart => {
            drawHeart(ctx, heart.x, heart.y, heart.size);

            heart.y -= heart.speedY;
            if (heart.y < -20) {
                heart.y = canvas.height + 20;
                heart.x = Math.random() * canvas.width;
            }
        });

        requestAnimationFrame(draw);
    }

    draw();
}

function loveWallpaper() {
    const desktop = document.querySelector('.desktop');
    desktop.style.background = 'none';

    const wallpaperLayer = document.createElement('div');
    wallpaperLayer.style.position = 'fixed';
    wallpaperLayer.style.top = '0';
    wallpaperLayer.style.left = '0';
    wallpaperLayer.style.width = '100%';
    wallpaperLayer.style.height = '100%';
    wallpaperLayer.style.pointerEvents = 'none';
    wallpaperLayer.style.zIndex = '-1';

    document.body.appendChild(wallpaperLayer);
    
    const canvas = document.createElement('canvas');
    canvas.id = 'liveWallpaperCanvas';
    wallpaperLayer.appendChild(canvas);

    const ctx = canvas.getContext('2d');

    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    const numHearts = 100;
    const hearts = [];

    for (let i = 0; i < numHearts; i++) {
        hearts.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height + canvas.height,
            size: Math.random() * 25 + 15,
            speedY: Math.random() * 1 + 0.5,
            color: `rgba(255, 105, 180, 0.8)`
        });
    }

    function drawHeart(ctx, x, y, size) {
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.bezierCurveTo(x, y - size * 0.4, x - size * 0.4, y, x, y + size * 0.5);
        ctx.bezierCurveTo(x + size * 0.4, y, x, y - size * 0.4, x, y);
        ctx.fillStyle = 'rgba(255, 105, 180, 0.8)';
        ctx.fill();
        ctx.closePath();
    }

    function draw() {
        ctx.fillStyle = 'rgba(30, 30, 30, 0.95)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        hearts.forEach(heart => {
            drawHeart(ctx, heart.x, heart.y, heart.size);

            heart.y -= heart.speedY;
            if (heart.y < -20) {
                heart.y = canvas.height + 20;
                heart.x = Math.random() * canvas.width;
            }
        });

        requestAnimationFrame(draw);
    }

    draw();
}

function starryNightWallpaper() {
    const desktop = document.querySelector('.desktop');
    desktop.style.background = 'none';

    const wallpaperLayer = document.createElement('div');
    wallpaperLayer.style.position = 'fixed';
    wallpaperLayer.style.top = '0';
    wallpaperLayer.style.left = '0';
    wallpaperLayer.style.width = '100%';
    wallpaperLayer.style.height = '100%';
    wallpaperLayer.style.pointerEvents = 'none';
    wallpaperLayer.style.zIndex = '-1';

    document.body.appendChild(wallpaperLayer);
    
    const canvas = document.createElement('canvas');
    canvas.id = 'liveWallpaperCanvas';
    wallpaperLayer.appendChild(canvas);

    const ctx = canvas.getContext('2d');

    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    const stars = [];
    const numStars = 200;

    for (let i = 0; i < numStars; i++) {
        stars.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            radius: Math.random() * 2 + 1,
            alpha: Math.random(),
            speed: Math.random() * 0.5 + 0.1
        });
    }

    function draw() {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        stars.forEach(star => {
            ctx.beginPath();
            ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(255, 255, 255, ${star.alpha})`;
            ctx.fill();
            ctx.closePath();

            star.y += star.speed;
            if (star.y > canvas.height) {
                star.y = 0;
                star.x = Math.random() * canvas.width;
            }

            star.alpha = Math.abs(Math.sin(Date.now() * 0.001 + star.x * 0.01));
        });

        requestAnimationFrame(draw);
    }

    draw();
}

function wallpaperMatrix() {
    const desktop = document.querySelector('.desktop');
    desktop.style.background = 'none';

    const wallpaperLayer = document.createElement('div');
    wallpaperLayer.style.position = 'fixed';
    wallpaperLayer.style.top = '0';
    wallpaperLayer.style.left = '0';
    wallpaperLayer.style.width = '100%';
    wallpaperLayer.style.height = '100%';
    wallpaperLayer.style.pointerEvents = 'none';
    wallpaperLayer.style.zIndex = '-1';

    document.body.appendChild(wallpaperLayer);
    
    const canvas = document.createElement('canvas');
    canvas.id = 'liveWallpaperCanvas';
    wallpaperLayer.appendChild(canvas);

    const ctx = canvas.getContext('2d');

    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        ctx.fillStyle = 'black';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
    }

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    const fontSize = 16;
    const columns = Math.floor(canvas.width / fontSize);
    const drops = Array(columns).fill(1);

    function draw() {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.fillStyle = '#0F0';
        ctx.font = fontSize + 'px monospace';

        for (let x = 0; x < drops.length; x++) {
            const text = characters.charAt(Math.floor(Math.random() * characters.length));
            ctx.fillText(text, x * fontSize, drops[x] * fontSize);
            drops[x]++;
            if (drops[x] * fontSize > canvas.height && Math.random() > 0.975) {
                drops[x] = 0;
            }
        }
        requestAnimationFrame(draw);
    }

    draw();
}

function rainWallpaper() {
    const desktop = document.querySelector('.desktop');
    desktop.style.background = 'none';

    const wallpaperLayer = document.createElement('div');
    wallpaperLayer.style.position = 'fixed';
    wallpaperLayer.style.top = '0';
    wallpaperLayer.style.left = '0';
    wallpaperLayer.style.width = '100%';
    wallpaperLayer.style.height = '100%';
    wallpaperLayer.style.pointerEvents = 'none';
    wallpaperLayer.style.zIndex = '-1';

    document.body.appendChild(wallpaperLayer);
    
    const canvas = document.createElement('canvas');
    canvas.id = 'liveWallpaperCanvas';
    wallpaperLayer.appendChild(canvas);

    const ctx = canvas.getContext('2d');

    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    const drops = [];
    const numDrops = 200;

    for (let i = 0; i < numDrops; i++) {
        drops.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            length: Math.random() * 20 + 10,
            opacity: Math.random() * 0.5 + 0.5
        });
    }

    function draw() {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.fillStyle = 'rgba(174, 194, 224, 0.8)';

        drops.forEach(drop => {
            ctx.beginPath();
            ctx.moveTo(drop.x, drop.y);
            ctx.lineTo(drop.x, drop.y + drop.length);
            ctx.lineWidth = 2;
            ctx.strokeStyle = `rgba(174, 194, 224, ${drop.opacity})`;
            ctx.stroke();
            ctx.closePath();

            drop.y += 5;
            if (drop.y > canvas.height) {
                drop.y = 0;
                drop.x = Math.random() * canvas.width;
            }
        });

        requestAnimationFrame(draw);
    }

    draw();
}

function gamingWallpaper() {
    const desktop = document.querySelector('.desktop');
    desktop.style.background = 'none';

    const wallpaperLayer = document.createElement('div');
    wallpaperLayer.style.position = 'fixed';
    wallpaperLayer.style.top = '0';
    wallpaperLayer.style.left = '0';
    wallpaperLayer.style.width = '100%';
    wallpaperLayer.style.height = '100%';
    wallpaperLayer.style.pointerEvents = 'none';
    wallpaperLayer.style.zIndex = '-1';

    document.body.appendChild(wallpaperLayer);
    
    const canvas = document.createElement('canvas');
    canvas.id = 'liveWallpaperCanvas';
    wallpaperLayer.appendChild(canvas);

    const ctx = canvas.getContext('2d');

    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    const numPixels = 100;
    const pixels = [];

    for (let i = 0; i < numPixels; i++) {
        pixels.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            size: Math.random() * 10 + 5,
            speedX: Math.random() * 2 - 1,
            speedY: Math.random() * 2 - 1,
            color: `hsl(${Math.random() * 360}, 100%, 50%)`
        });
    }

    function draw() {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        pixels.forEach(pixel => {
            ctx.fillStyle = pixel.color;
            ctx.fillRect(pixel.x, pixel.y, pixel.size, pixel.size);

            pixel.x += pixel.speedX;
            pixel.y += pixel.speedY;

            if (pixel.x < 0 || pixel.x > canvas.width) {
                pixel.speedX *= -1;
            }
            if (pixel.y < 0 || pixel.y > canvas.height) {
                pixel.speedY *= -1;
            }
        });

        requestAnimationFrame(draw);
    }

    draw();
}

function animation_default() {
  const style = document.createElement('style');
  document.head.appendChild(style);

  style.sheet.insertRule(`
	@keyframes animate-in {
	  0% {
		transform: scale(0.5);
		opacity: 0;
	  }
	  100% {
		transform: scale(1);
		opacity: 1;
	  }
	}
  `);

  style.sheet.insertRule(`
	@keyframes animate-out {
	  0% {
		transform: scale(1);
		opacity: 1;
	  }
	  100% {
		transform: scale(0.5);
		opacity: 0;
	  }
	}
  `);
}

function set_animation_default() {
	localStorage.setItem('FMOSsettingAnimationIframe', '1')
	animation_default();
}

function animation_Bounce_and_Rotate_Slide() {
  const style = document.createElement('style');
  document.head.appendChild(style);

  style.sheet.insertRule(`
    @keyframes animate-in {
      0% {
        transform: scale(0.3) rotate(5deg);
        opacity: 0;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
      }
      50% {
        transform: scale(1.05) rotate(-3deg);
        opacity: 0.7;
        box-shadow: 0 0 15px rgba(0, 0, 0, 0.3);
      }
      100% {
        transform: scale(1) rotate(0deg);
        opacity: 1;
        box-shadow: 0 0 20px rgba(0, 0, 0, 0.4);
      }
    }
  `);

  style.sheet.insertRule(`
    @keyframes animate-out {
      0% {
        transform: scale(1) rotate(0deg);
        opacity: 1;
        box-shadow: 0 0 20px rgba(0, 0, 0, 0.4);
      }
      50% {
        transform: scale(1.05) rotate(3deg);
        opacity: 0.7;
        box-shadow: 0 0 15px rgba(0, 0, 0, 0.3);
      }
      100% {
        transform: scale(0.3) rotate(-5deg);
        opacity: 0;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
      }
    }
  `);
}

function set_animation_Bounce_and_Rotate_Slide() {
	localStorage.setItem('FMOSsettingAnimationIframe', '2')
	animation_Bounce_and_Rotate_Slide();
}

function animation_Pop_and_Slide() {
  const style = document.createElement('style');
  document.head.appendChild(style);

  style.sheet.insertRule(`
	@keyframes animate-in {
	  0% {
		transform: scale(0.8) translateY(-50px);
		opacity: 0;
		box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
		border-radius: 10px;
	  }
	  50% {
		transform: scale(1.05) translateY(10px);
		opacity: 0.6;
		box-shadow: 0 0 25px rgba(0, 0, 0, 0.3);
		border-radius: 15px;
	  }
	  100% {
		transform: scale(1) translateY(0);
		opacity: 1;
		box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
		border-radius: 20px;
	  }
	}
  `);

  style.sheet.insertRule(`
	@keyframes animate-out {
	  0% {
		transform: scale(1) translateY(0);
		opacity: 1;
		box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
		border-radius: 20px;
	  }
	  50% {
		transform: scale(1.05) translateY(10px);
		opacity: 0.6;
		box-shadow: 0 0 25px rgba(0, 0, 0, 0.3);
		border-radius: 15px;
	  }
	  100% {
		transform: scale(0.8) translateY(-50px);
		opacity: 0;
		box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
		border-radius: 10px;
	  }
	}
  `);
}

function set_animation_Pop_and_Slide() {
	localStorage.setItem('FMOSsettingAnimationIframe', '3')
	animation_Pop_and_Slide();
}

function animation_Smooth_Blur_Transition() {
  const style = document.createElement('style');
  document.head.appendChild(style);

  style.sheet.insertRule(`
	@keyframes animate-in {
	  0% {
		transform: scale(0.6) translateY(-20px);
		opacity: 0;
		filter: blur(5px);
	  }
	  70% {
		transform: scale(1.05) translateY(5px);
		opacity: 0.8;
		filter: blur(2px);
	  }
	  100% {
		transform: scale(1) translateY(0);
		opacity: 1;
		filter: blur(0);
	  }
	}
  `);

  style.sheet.insertRule(`
	@keyframes animate-out {
	  0% {
		transform: scale(1) translateY(0);
		opacity: 1;
		filter: blur(0);
	  }
	  70% {
		transform: scale(1.05) translateY(-5px);
		opacity: 0.8;
		filter: blur(2px);
	  }
	  100% {
		transform: scale(0.6) translateY(20px);
		opacity: 0;
		filter: blur(5px);
	  }
	}
  `);
}

function set_animation_Smooth_Blur_Transition() {
	localStorage.setItem('FMOSsettingAnimationIframe', '4')
	animation_Smooth_Blur_Transition();
}

function animation_Elegant_Fade_and_Slide_Animation() {
  const style = document.createElement('style');
  document.head.appendChild(style);

  style.sheet.insertRule(`
	@keyframes animate-in {
	  0% {
		transform: translateX(-100%) scale(0.8);
		opacity: 0;
	  }
	  100% {
		transform: translateX(0) scale(1);
		opacity: 1;
	  }
	}
  `);

  style.sheet.insertRule(`
	@keyframes animate-out {
	  0% {
		transform: translateX(0) scale(1);
		opacity: 1;
	  }
	  100% {
		transform: translateX(100%) scale(0.8);
		opacity: 0;
	  }
	}
  `);
}

function set_animation_Elegant_Fade_and_Slide_Animation() {
	localStorage.setItem('FMOSsettingAnimationIframe', '5')
	animation_Elegant_Fade_and_Slide_Animation();
}

function animation_Dynamic_Bouncy_Entrance() {
  const style = document.createElement('style');
  document.head.appendChild(style);

  style.sheet.insertRule(`
	@keyframes animate-in {
	  0% {
		transform: scale(0.5) translateY(-50px);
		opacity: 0;
	  }
	  40% {
		transform: scale(1.1) translateY(10px);
		opacity: 1;
	  }
	  70% {
		transform: scale(0.9) translateY(-5px);
		opacity: 1;
	  }
	  100% {
		transform: scale(1) translateY(0);
		opacity: 1;
	  }
	}
  `);

  style.sheet.insertRule(`
	@keyframes animate-out {
	  0% {
		transform: scale(1) translateY(0);
		opacity: 1;
	  }
	  40% {
		transform: scale(0.9) translateY(5px);
		opacity: 1;
	  }
	  100% {
		transform: scale(0.5) translateY(50px);
		opacity: 0;
	  }
	}
  `);
}

function set_animation_Dynamic_Bouncy_Entrance() {
	localStorage.setItem('FMOSsettingAnimationIframe', '6')
	animation_Dynamic_Bouncy_Entrance();
}

function animation_Scale_and_Blur() {
  const style = document.createElement('style');
  document.head.appendChild(style);

  style.sheet.insertRule(`
	@keyframes animate-in {
	  0% {
		transform: translateX(-100%) scale(0.8);
		opacity: 0;
		filter: blur(8px);
	  }
	  100% {
		transform: translateX(0) scale(1);
		opacity: 1;
		filter: blur(0);
	  }
	}
  `);

  style.sheet.insertRule(`
	@keyframes animate-out {
	  0% {
		transform: translateX(0) scale(1);
		opacity: 1;
		filter: blur(0);
	  }
	  100% {
		transform: translateX(100%) scale(0.8);
		opacity: 0;
		filter: blur(8px);
	  }
	}
  `);
}

function set_animation_Scale_and_Blur() {
	localStorage.setItem('FMOSsettingAnimationIframe', '7')
	animation_Scale_and_Blur();
}

function animation_Elastic_Pop_Animation() {
  const style = document.createElement('style');
  document.head.appendChild(style);

  style.sheet.insertRule(`
	@keyframes animate-in {
	  0% {
		transform: scale(0.4) translateY(-30px);
		opacity: 0;
	  }
	  60% {
		transform: scale(1.1) translateY(10px);
		opacity: 1;
	  }
	  100% {
		transform: scale(1) translateY(0);
		opacity: 1;
	  }
	}
  `);

  style.sheet.insertRule(`
	@keyframes animate-out {
	  0% {
		transform: scale(1) translateY(0);
		opacity: 1;
	  }
	  40% {
		transform: scale(1.1) translateY(-10px);
		opacity: 0.8;
	  }
	  100% {
		transform: scale(0.4) translateY(30px);
		opacity: 0;
	  }
	}
  `);
}

function set_animation_Elastic_Pop_Animation() {
	localStorage.setItem('FMOSsettingAnimationIframe', '8')
	animation_Elastic_Pop_Animation();
}

function checkIframeAnimation() {
	valuetheme = localStorage.getItem('FMOSsettingAnimationIframe');
    if (valuetheme === '1') {
		// do nothing
    } else if (valuetheme === '2') {
        animation_Bounce_and_Rotate_Slide();
    } else if (valuetheme === '3') {
        animation_Pop_and_Slide();
	} else if (valuetheme === '4') {
		animation_Smooth_Blur_Transition();
	} else if (valuetheme === '5') {
		animation_Elegant_Fade_and_Slide_Animation();
	} else if (valuetheme === '6') {
		animation_Dynamic_Bouncy_Entrance();
	} else if (valuetheme === '7') {
		animation_Scale_and_Blur();
	} else if (valuetheme === '8') {
		animation_Elastic_Pop_Animation();
    } else {
        showError('Animation error ERROR')
		localStorage.setItem('FMOSsettingAnimationIframe', '1')
    }
}

//-------save-themes-and-wallpapers--------------------------------------------------------------------------------------

function wallpaper_Matrix() {
	localStorage.setItem('FMOSwallpaperlive', 'Matrix');
	wallpaperMatrix();
}

function wallpaper_off() {
	localStorage.setItem('FMOSwallpaperlive', 'false');
}

function wallpaper_Cyberpunk() {
	localStorage.setItem('FMOSwallpaperlive', 'Cyberpunk');
	futuristicCyberpunkWallpaper();
}

function wallpaper_gaming() {
	localStorage.setItem('FMOSwallpaperlive', 'gaming');
	pulsatingNeonWallpaper();
}

function wallpaper_love() {
	localStorage.setItem('FMOSwallpaperlive', 'love');
	loveWallpaper();
}

function wallpaper_starryNight() {
	localStorage.setItem('FMOSwallpaperlive', 'starryNight');
	starryNightWallpaper();
}

function wallpaper_rain() {
	localStorage.setItem('FMOSwallpaperlive', 'Matrix');
	rainWallpaper();
}

let confirmofwallpapertheme = null;

function theme_gaming() {
	applyGamingTheme();
	localStorage.setItem('FMOStheme', 'gaming');
	confirmofwallpapertheme = confirm("Do u want to apply the wallpaper to the theme too?");
	if (confirmofwallpapertheme) {
        wallpaper_gaming();
    } else {
        showError('Wallpaper Was Not Applyed')
    }
}

function theme_love() {
	applyLoveTheme();
	localStorage.setItem('FMOStheme', 'love');
	confirmofwallpapertheme = confirm("Do u want to apply the wallpaper to the theme too?");
	if (confirmofwallpapertheme) {
        wallpaper_love();
    } else {
        showError('Wallpaper Was Not Applyed')
    }
}

function theme_night() {
	applyNightTheme();
	localStorage.setItem('FMOStheme', 'night');
	confirmofwallpapertheme = confirm("Do u want to apply the wallpaper to the theme too?");
	if (confirmofwallpapertheme) {
        wallpaper_starryNight();
    } else {
        showError('Wallpaper Was Not Applyed')
    }
}

function theme_cyberpunk() {
	applyCyberpunkTheme();
	localStorage.setItem('FMOStheme', 'cyberpunk');
	confirmofwallpapertheme = confirm("Do u want to apply the wallpaper to the theme too?");
	if (confirmofwallpapertheme) {
        wallpaper_Cyberpunk();
    } else {
        showError('Wallpaper Was Not Applyed')
    }
}

function theme_default() {
	localStorage.setItem('FMOStheme', 'false');
	askToRestartOS();
}