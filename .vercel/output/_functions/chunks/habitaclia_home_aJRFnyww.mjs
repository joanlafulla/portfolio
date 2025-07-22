const habitaclia_home = new Proxy({"src":"/_astro/habitaclia_home.DSy6Iv7N.png","width":264,"height":264,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/joan.lafulla/Desktop/portfolio/app/src/assets/habitaclia_home.png";
							}
							
							return target[name];
						}
					});

export { habitaclia_home as default };
