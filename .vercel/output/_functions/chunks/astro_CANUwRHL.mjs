const astro = new Proxy({"src":"/_astro/astro.Cwj_4DxC.png","width":49,"height":48,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/joan.lafulla/Desktop/portfolio/app/src/assets/astro.png";
							}
							
							return target[name];
						}
					});

export { astro as default };
