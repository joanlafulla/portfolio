const jaws = new Proxy({"src":"/_astro/jaws.CB0Yxl3Q.png","width":328,"height":985,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/joan.lafulla/Desktop/portfolio/app/src/assets/jaws.png";
							}
							
							return target[name];
						}
					});

export { jaws as default };
