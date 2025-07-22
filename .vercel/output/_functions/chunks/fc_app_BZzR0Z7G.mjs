const fc_app = new Proxy({"src":"/_astro/fc_app.hqbcDYmp.png","width":264,"height":264,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/joan.lafulla/Desktop/portfolio/app/src/assets/fc_app.png";
							}
							
							return target[name];
						}
					});

export { fc_app as default };
