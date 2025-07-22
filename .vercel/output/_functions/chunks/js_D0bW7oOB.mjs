const js = new Proxy({"src":"/_astro/js.CfXUEt_4.png","width":48,"height":48,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/joan.lafulla/Desktop/portfolio/app/src/assets/js.png";
							}
							
							return target[name];
						}
					});

export { js as default };
