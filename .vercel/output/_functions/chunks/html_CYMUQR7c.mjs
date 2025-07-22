const html = new Proxy({"src":"/_astro/html.avm1aWES.png","width":48,"height":48,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/joan.lafulla/Desktop/portfolio/app/src/assets/html.png";
							}
							
							return target[name];
						}
					});

export { html as default };
