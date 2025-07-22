const jaws_small = new Proxy({"src":"/_astro/jaws_small.CNlKqUrN.png","width":328,"height":452,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/joan.lafulla/Desktop/portfolio/app/src/assets/jaws_small.png";
							}
							
							return target[name];
						}
					});

export { jaws_small as default };
