const gsap = new Proxy({"src":"/_astro/gsap.2LT5UWjH.png","width":49,"height":48,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/joan.lafulla/Desktop/portfolio/app/src/assets/gsap.png";
							}
							
							return target[name];
						}
					});

export { gsap as default };
