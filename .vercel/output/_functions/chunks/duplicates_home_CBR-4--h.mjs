const duplicates_home = new Proxy({"src":"/_astro/duplicates_home.CVGe0WIr.png","width":264,"height":264,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/joan.lafulla/Desktop/portfolio/app/src/assets/duplicates_home.png";
							}
							
							return target[name];
						}
					});

export { duplicates_home as default };
