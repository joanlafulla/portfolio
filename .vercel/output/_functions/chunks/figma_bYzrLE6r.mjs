const figma = new Proxy({"src":"/_astro/figma.CIBTkMbF.png","width":48,"height":48,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/joan.lafulla/Desktop/portfolio/app/src/assets/figma.png";
							}
							
							return target[name];
						}
					});

export { figma as default };
