const css = new Proxy({"src":"/_astro/css.1L3FexFy.png","width":48,"height":48,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/joan.lafulla/Desktop/portfolio/app/src/assets/css.png";
							}
							
							return target[name];
						}
					});

export { css as default };
