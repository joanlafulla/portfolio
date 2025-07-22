const dark_home = new Proxy({"src":"/_astro/dark_home.Dk4lEoGf.png","width":264,"height":264,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/joan.lafulla/Desktop/portfolio/app/src/assets/dark_home.png";
							}
							
							return target[name];
						}
					});

export { dark_home as default };
