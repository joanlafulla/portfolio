const me_looking_up_5 = new Proxy({"src":"/_astro/me_looking_up_5.DCWYZJ1o.png","width":279,"height":349,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/joan.lafulla/Desktop/portfolio/app/src/assets/me_looking_up_5.png";
							}
							
							return target[name];
						}
					});

export { me_looking_up_5 as default };
