const system_home = new Proxy({"src":"/_astro/system_home.DC18S9eE.png","width":264,"height":264,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/joan.lafulla/Desktop/portfolio/app/src/assets/system_home.png";
							}
							
							return target[name];
						}
					});

export { system_home as default };
