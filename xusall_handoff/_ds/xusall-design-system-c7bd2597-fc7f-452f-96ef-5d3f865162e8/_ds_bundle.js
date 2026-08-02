/* @ds-bundle: {"format":4,"namespace":"XUsAllDesignSystem_c7bd25","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"Dialog","sourcePath":"components/feedback/Dialog.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"8e60ac0d9bf4","components/core/Button.jsx":"8aab6337569a","components/core/Card.jsx":"2ae6306fad37","components/core/Icon.jsx":"a0d36fdaf0b7","components/core/IconButton.jsx":"466d02dbc953","components/core/Tag.jsx":"f5b09be1e435","components/feedback/Dialog.jsx":"c97adfe0de31","components/feedback/Toast.jsx":"44f649cf1b11","components/feedback/Tooltip.jsx":"598e3d176bef","components/forms/Checkbox.jsx":"1d74fef42bd5","components/forms/Input.jsx":"e5cee1591f24","components/forms/Radio.jsx":"0eee78e33641","components/forms/Select.jsx":"380a76f531fb","components/forms/Switch.jsx":"44070edac6ea","components/navigation/Tabs.jsx":"4d97ffb2cd94","ui_kits/app-shell/HomeView.jsx":"8d303d45a1af","ui_kits/app-shell/LoginView.jsx":"74f9a23c04ce","ui_kits/app-shell/SettingsView.jsx":"4c7b6b4326de","ui_kits/app-shell/Sidebar.jsx":"3c72f0f992cd"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.XUsAllDesignSystem_c7bd25 = window.XUsAllDesignSystem_c7bd25 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Badge.jsx
try { (() => {
function Badge({
  tone = 'neutral',
  children
}) {
  const tones = {
    neutral: {
      background: 'var(--surface-3)',
      color: 'var(--text-secondary)'
    },
    accent: {
      background: 'rgba(124,77,255,.16)',
      color: 'var(--accent-primary-hover)'
    },
    success: {
      background: 'rgba(46,230,166,.14)',
      color: 'var(--color-success)'
    },
    error: {
      background: 'rgba(255,92,92,.14)',
      color: 'var(--color-error)'
    },
    warning: {
      background: 'rgba(255,184,77,.14)',
      color: 'var(--color-warning)'
    }
  };
  return React.createElement('span', {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      padding: '3px 10px',
      borderRadius: 'var(--radius-pill)',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-2xs)',
      fontWeight: 'var(--weight-medium)',
      letterSpacing: 'var(--tracking-wide)',
      textTransform: 'uppercase',
      ...tones[tone]
    }
  }, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
const sizes = {
  sm: {
    padding: '6px 14px',
    fontSize: 'var(--text-xs)',
    height: 30
  },
  md: {
    padding: '9px 18px',
    fontSize: 'var(--text-sm)',
    height: 38
  },
  lg: {
    padding: '12px 24px',
    fontSize: 'var(--text-md)',
    height: 46
  }
};
function Button({
  variant = 'primary',
  size = 'md',
  disabled = false,
  children,
  onClick,
  style
}) {
  const s = sizes[size];
  const base = {
    fontFamily: 'var(--font-display)',
    fontWeight: 'var(--weight-medium)',
    border: '1px solid transparent',
    borderRadius: 'var(--radius-pill)',
    cursor: disabled ? 'not-allowed' : 'pointer',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    transition: 'background var(--duration-fast) var(--ease-standard), border-color var(--duration-fast) var(--ease-standard), opacity var(--duration-fast)',
    opacity: disabled ? 0.4 : 1,
    ...s,
    ...style
  };
  const variants = {
    primary: {
      background: 'var(--accent-primary)',
      color: 'var(--text-on-accent)'
    },
    secondary: {
      background: 'var(--surface-2)',
      color: 'var(--text-primary)',
      borderColor: 'var(--border-default)'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--text-primary)'
    },
    danger: {
      background: 'var(--color-error)',
      color: '#000'
    }
  };
  return React.createElement('button', {
    disabled,
    onClick,
    style: {
      ...base,
      ...variants[variant]
    },
    onMouseEnter: e => {
      if (!disabled && variant === 'primary') e.currentTarget.style.background = 'var(--accent-primary-hover)';
    },
    onMouseLeave: e => {
      if (!disabled && variant === 'primary') e.currentTarget.style.background = 'var(--accent-primary)';
    }
  }, children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function Card({
  children,
  elevated = false,
  style
}) {
  return React.createElement('div', {
    style: {
      background: elevated ? 'var(--surface-1)' : 'var(--surface-2)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-lg)',
      padding: 'var(--space-5)',
      boxShadow: elevated ? 'var(--shadow-elevation-2)' : 'none',
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
const {
  useEffect,
  useRef
} = React;
function Icon({
  name,
  size = 20,
  color = 'currentColor',
  strokeWidth = 2
}) {
  const ref = useRef(null);
  useEffect(() => {
    if (window.lucide && ref.current) window.lucide.createIcons({
      nameAttr: 'data-lucide',
      attrs: {
        width: size,
        height: size,
        color,
        'stroke-width': strokeWidth
      }
    });
  }, [name, size, color, strokeWidth]);
  return React.createElement('i', {
    ref,
    'data-lucide': name,
    style: {
      display: 'inline-flex',
      lineHeight: 0
    }
  });
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function IconButton({
  icon,
  size = 38,
  variant = 'ghost',
  disabled = false,
  onClick,
  label
}) {
  const variants = {
    ghost: {
      background: 'transparent',
      border: '1px solid transparent'
    },
    outline: {
      background: 'transparent',
      border: '1px solid var(--border-default)'
    },
    filled: {
      background: 'var(--surface-2)',
      border: '1px solid transparent'
    }
  };
  return React.createElement('button', {
    onClick,
    disabled,
    'aria-label': label,
    style: {
      width: size,
      height: size,
      borderRadius: 'var(--radius-md)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.4 : 1,
      color: 'var(--text-primary)',
      transition: 'background var(--duration-fast) var(--ease-standard)',
      ...variants[variant]
    },
    onMouseEnter: e => {
      if (!disabled) e.currentTarget.style.background = 'var(--surface-3)';
    },
    onMouseLeave: e => {
      if (!disabled) e.currentTarget.style.background = variants[variant].background;
    }
  }, React.createElement(__ds_scope.Icon, {
    name: icon,
    size: Math.round(size * 0.5)
  }));
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function Tag({
  children,
  onRemove,
  selected = false
}) {
  return React.createElement('span', {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      padding: '5px 12px',
      borderRadius: 'var(--radius-pill)',
      border: '1px solid ' + (selected ? 'var(--accent-primary)' : 'var(--border-default)'),
      background: selected ? 'rgba(124,77,255,.12)' : 'transparent',
      color: selected ? 'var(--accent-primary-hover)' : 'var(--text-secondary)',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-xs)'
    }
  }, children, onRemove && React.createElement('button', {
    onClick: onRemove,
    style: {
      background: 'none',
      border: 'none',
      color: 'inherit',
      cursor: 'pointer',
      padding: 0,
      fontSize: 12,
      lineHeight: 1
    }
  }, '\u00d7'));
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Dialog.jsx
try { (() => {
function Dialog({
  open = true,
  title,
  children,
  onClose
}) {
  if (!open) return null;
  return React.createElement('div', {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'rgba(0,0,0,.7)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backdropFilter: 'blur(6px)'
    }
  }, React.createElement('div', {
    style: {
      width: 380,
      background: 'var(--surface-1)',
      border: '1px solid var(--border-default)',
      borderRadius: 'var(--radius-lg)',
      padding: 'var(--space-6)',
      boxShadow: 'var(--shadow-elevation-3)',
      fontFamily: 'var(--font-body)'
    }
  }, React.createElement('div', {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 16
    }
  }, React.createElement('div', {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-bold)',
      fontSize: 'var(--text-lg)',
      color: '#fff'
    }
  }, title), React.createElement(__ds_scope.IconButton, {
    icon: 'x',
    variant: 'ghost',
    size: 30,
    onClick: onClose,
    label: 'Close'
  })), React.createElement('div', {
    style: {
      color: 'var(--text-secondary)',
      fontSize: 'var(--text-sm)'
    }
  }, children)));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
const icons = {
  success: 'check-circle',
  error: 'alert-circle',
  info: 'info',
  warning: 'alert-triangle'
};
const colors = {
  success: 'var(--color-success)',
  error: 'var(--color-error)',
  info: 'var(--accent-primary)',
  warning: 'var(--color-warning)'
};
function Toast({
  tone = 'info',
  title,
  description
}) {
  return React.createElement('div', {
    style: {
      display: 'flex',
      gap: 12,
      alignItems: 'flex-start',
      background: 'var(--surface-1)',
      border: '1px solid var(--border-default)',
      borderRadius: 'var(--radius-md)',
      padding: '14px 16px',
      boxShadow: 'var(--shadow-elevation-3)',
      width: 320,
      fontFamily: 'var(--font-body)'
    }
  }, React.createElement(__ds_scope.Icon, {
    name: icons[tone],
    size: 18,
    color: colors[tone]
  }), React.createElement('div', null, React.createElement('div', {
    style: {
      fontSize: 'var(--text-sm)',
      fontWeight: 'var(--weight-medium)',
      color: 'var(--text-primary)'
    }
  }, title), description && React.createElement('div', {
    style: {
      fontSize: 'var(--text-xs)',
      color: 'var(--text-secondary)',
      marginTop: 2
    }
  }, description)));
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
const {
  useState
} = React;
function Tooltip({
  label,
  children
}) {
  const [show, setShow] = useState(false);
  return React.createElement('span', {
    style: {
      position: 'relative',
      display: 'inline-flex'
    },
    onMouseEnter: () => setShow(true),
    onMouseLeave: () => setShow(false)
  }, children, show && React.createElement('span', {
    style: {
      position: 'absolute',
      bottom: '125%',
      left: '50%',
      transform: 'translateX(-50%)',
      background: 'var(--gray-100)',
      color: '#000',
      fontSize: 'var(--text-2xs)',
      padding: '5px 9px',
      borderRadius: 'var(--radius-sm)',
      whiteSpace: 'nowrap',
      fontFamily: 'var(--font-body)',
      boxShadow: 'var(--shadow-elevation-2)',
      pointerEvents: 'none'
    }
  }, label));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function Checkbox({
  label,
  checked = false,
  onChange,
  disabled = false
}) {
  return React.createElement('label', {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-sm)',
      color: 'var(--text-primary)'
    }
  }, React.createElement('span', {
    onClick: () => !disabled && onChange && onChange({
      target: {
        checked: !checked
      }
    }),
    style: {
      width: 18,
      height: 18,
      borderRadius: 5,
      border: '1px solid ' + (checked ? 'var(--accent-primary)' : 'var(--border-strong)'),
      background: checked ? 'var(--accent-primary)' : 'transparent',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'all var(--duration-fast) var(--ease-standard)'
    }
  }, checked && React.createElement(__ds_scope.Icon, {
    name: 'check',
    size: 13,
    color: 'var(--text-on-accent)',
    strokeWidth: 3
  })), label);
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function Input({
  label,
  placeholder,
  type = 'text',
  error,
  value,
  onChange,
  disabled = false
}) {
  return React.createElement('div', {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      fontFamily: 'var(--font-body)'
    }
  }, label && React.createElement('label', {
    style: {
      fontSize: 'var(--text-xs)',
      color: 'var(--text-secondary)'
    }
  }, label), React.createElement('input', {
    type,
    placeholder,
    value,
    onChange,
    disabled,
    style: {
      background: 'var(--surface-2)',
      border: '1px solid ' + (error ? 'var(--color-error)' : 'var(--border-default)'),
      borderRadius: 'var(--radius-md)',
      padding: '10px 14px',
      color: 'var(--text-primary)',
      fontSize: 'var(--text-sm)',
      fontFamily: 'inherit',
      outline: 'none',
      opacity: disabled ? 0.5 : 1
    },
    onFocus: e => {
      e.target.style.borderColor = 'var(--accent-primary)';
      e.target.style.boxShadow = 'var(--shadow-glow-violet)';
    },
    onBlur: e => {
      e.target.style.borderColor = error ? 'var(--color-error)' : 'var(--border-default)';
      e.target.style.boxShadow = 'none';
    }
  }), error && React.createElement('span', {
    style: {
      fontSize: 'var(--text-2xs)',
      color: 'var(--color-error)'
    }
  }, error));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function Radio({
  label,
  checked = false,
  onChange,
  disabled = false
}) {
  return React.createElement('label', {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-sm)',
      color: 'var(--text-primary)'
    }
  }, React.createElement('span', {
    onClick: () => !disabled && onChange && onChange({
      target: {
        checked: true
      }
    }),
    style: {
      width: 18,
      height: 18,
      borderRadius: '50%',
      border: '1px solid ' + (checked ? 'var(--accent-primary)' : 'var(--border-strong)'),
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, checked && React.createElement('span', {
    style: {
      width: 9,
      height: 9,
      borderRadius: '50%',
      background: 'var(--accent-primary)'
    }
  })), label);
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function Select({
  label,
  options = [],
  value,
  onChange,
  disabled = false
}) {
  return React.createElement('div', {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      fontFamily: 'var(--font-body)'
    }
  }, label && React.createElement('label', {
    style: {
      fontSize: 'var(--text-xs)',
      color: 'var(--text-secondary)'
    }
  }, label), React.createElement('div', {
    style: {
      position: 'relative'
    }
  }, React.createElement('select', {
    value,
    onChange,
    disabled,
    style: {
      appearance: 'none',
      width: '100%',
      background: 'var(--surface-2)',
      border: '1px solid var(--border-default)',
      borderRadius: 'var(--radius-md)',
      padding: '10px 36px 10px 14px',
      color: 'var(--text-primary)',
      fontSize: 'var(--text-sm)',
      fontFamily: 'inherit',
      outline: 'none',
      opacity: disabled ? 0.5 : 1
    }
  }, options.map(o => React.createElement('option', {
    key: o,
    value: o
  }, o))), React.createElement('div', {
    style: {
      position: 'absolute',
      right: 10,
      top: '50%',
      transform: 'translateY(-50%)',
      pointerEvents: 'none',
      color: 'var(--text-secondary)'
    }
  }, React.createElement(__ds_scope.Icon, {
    name: 'chevron-down',
    size: 16
  }))));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function Switch({
  checked = false,
  onChange,
  disabled = false
}) {
  return React.createElement('span', {
    onClick: () => !disabled && onChange && onChange({
      target: {
        checked: !checked
      }
    }),
    style: {
      width: 42,
      height: 24,
      borderRadius: 'var(--radius-pill)',
      background: checked ? 'var(--accent-primary)' : 'var(--surface-3)',
      border: '1px solid ' + (checked ? 'var(--accent-primary)' : 'var(--border-default)'),
      display: 'inline-flex',
      alignItems: 'center',
      padding: 2,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      transition: 'background var(--duration-fast) var(--ease-standard)'
    }
  }, React.createElement('span', {
    style: {
      width: 18,
      height: 18,
      borderRadius: '50%',
      background: '#fff',
      transform: checked ? 'translateX(18px)' : 'translateX(0)',
      transition: 'transform var(--duration-fast) var(--ease-standard)'
    }
  }));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function Tabs({
  tabs = [],
  active,
  onChange
}) {
  return React.createElement('div', {
    style: {
      display: 'flex',
      gap: 4,
      borderBottom: '1px solid var(--border-subtle)',
      fontFamily: 'var(--font-body)'
    }
  }, tabs.map(t => React.createElement('button', {
    key: t,
    onClick: () => onChange && onChange(t),
    style: {
      background: 'none',
      border: 'none',
      padding: '10px 16px',
      cursor: 'pointer',
      fontSize: 'var(--text-sm)',
      color: t === active ? 'var(--text-primary)' : 'var(--text-tertiary)',
      fontWeight: t === active ? 'var(--weight-medium)' : 'var(--weight-regular)',
      borderBottom: '2px solid ' + (t === active ? 'var(--accent-primary)' : 'transparent'),
      marginBottom: -1,
      transition: 'color var(--duration-fast)'
    }
  }, t)));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app-shell/HomeView.jsx
try { (() => {
const {
  Card,
  Badge,
  Button,
  Icon
} = window.XUsAllDesignSystem_c7bd25;
function HomeView() {
  const stats = [{
    label: 'Active users',
    value: '24.1k',
    icon: 'users'
  }, {
    label: 'Sessions today',
    value: '3,204',
    icon: 'activity'
  }, {
    label: 'Uptime',
    value: '99.98%',
    icon: 'check-circle'
  }];
  const projects = [{
    name: 'Mobile onboarding',
    tone: 'success',
    status: 'On track'
  }, {
    name: 'Payments revamp',
    tone: 'warning',
    status: 'At risk'
  }, {
    name: 'Design system v2',
    tone: 'accent',
    status: 'In review'
  }];
  return React.createElement('div', {
    style: {
      padding: 'var(--space-7)',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-6)',
      fontFamily: 'var(--font-body)'
    }
  }, React.createElement('div', {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, React.createElement('div', null, React.createElement('div', {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-bold)',
      fontSize: 'var(--text-3xl)',
      color: '#fff',
      letterSpacing: 'var(--tracking-tight)'
    }
  }, 'Good morning, Jordan'), React.createElement('div', {
    style: {
      color: 'var(--text-secondary)',
      fontSize: 'var(--text-sm)',
      marginTop: 4
    }
  }, 'Here\u2019s what\u2019s moving today.')), React.createElement(Button, {
    variant: 'primary'
  }, '+ New project')), React.createElement('div', {
    style: {
      display: 'flex',
      gap: 'var(--space-5)'
    }
  }, stats.map(s => React.createElement(Card, {
    key: s.label,
    style: {
      flex: 1
    }
  }, React.createElement(Icon, {
    name: s.icon,
    size: 18,
    color: 'var(--accent-secondary)'
  }), React.createElement('div', {
    style: {
      fontSize: 'var(--text-2xl)',
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-bold)',
      color: '#fff',
      marginTop: 10
    }
  }, s.value), React.createElement('div', {
    style: {
      fontSize: 'var(--text-xs)',
      color: 'var(--text-secondary)',
      marginTop: 2
    }
  }, s.label)))), React.createElement(Card, {
    elevated: true
  }, React.createElement('div', {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-medium)',
      fontSize: 'var(--text-lg)',
      color: '#fff',
      marginBottom: 14
    }
  }, 'Projects'), React.createElement('div', {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, projects.map(p => React.createElement('div', {
    key: p.name,
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '10px 0',
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, React.createElement('span', {
    style: {
      color: 'var(--text-primary)',
      fontSize: 'var(--text-sm)'
    }
  }, p.name), React.createElement(Badge, {
    tone: p.tone
  }, p.status))))));
}
window.HomeView = HomeView;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app-shell/HomeView.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app-shell/LoginView.jsx
try { (() => {
const {
  Input,
  Button
} = window.XUsAllDesignSystem_c7bd25;
function LoginView({
  onLogin
}) {
  const [email, setEmail] = React.useState('');
  return React.createElement('div', {
    style: {
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'var(--font-body)'
    }
  }, React.createElement('div', {
    style: {
      width: 340,
      display: 'flex',
      flexDirection: 'column',
      gap: 20
    }
  }, React.createElement('div', {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-bold)',
      fontSize: 'var(--text-4xl)',
      color: '#fff',
      letterSpacing: 'var(--tracking-tighter)',
      textAlign: 'center'
    }
  }, 'XUsAll'), React.createElement('div', {
    style: {
      textAlign: 'center',
      color: 'var(--text-secondary)',
      fontSize: 'var(--text-sm)'
    }
  }, 'Connect. Empower. Inspire.'), React.createElement(Input, {
    label: 'Email',
    placeholder: 'you@example.com',
    value: email,
    onChange: e => setEmail(e.target.value)
  }), React.createElement(Input, {
    label: 'Password',
    type: 'password',
    placeholder: '\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022'
  }), React.createElement(Button, {
    variant: 'primary',
    onClick: onLogin,
    style: {
      width: '100%'
    }
  }, 'Sign in')));
}
window.LoginView = LoginView;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app-shell/LoginView.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app-shell/SettingsView.jsx
try { (() => {
const {
  Card,
  Input,
  Select,
  Switch,
  Checkbox,
  Tabs,
  Button
} = window.XUsAllDesignSystem_c7bd25;
function SettingsView() {
  const [tab, setTab] = React.useState('Profile');
  return React.createElement('div', {
    style: {
      padding: 'var(--space-7)',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-6)',
      fontFamily: 'var(--font-body)',
      maxWidth: 560
    }
  }, React.createElement('div', {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-bold)',
      fontSize: 'var(--text-3xl)',
      color: '#fff'
    }
  }, 'Settings'), React.createElement(Tabs, {
    tabs: ['Profile', 'Notifications', 'Security'],
    active: tab,
    onChange: setTab
  }), tab === 'Profile' && React.createElement(Card, null, React.createElement('div', {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, React.createElement(Input, {
    label: 'Full name',
    value: 'Jordan Diaz'
  }), React.createElement(Input, {
    label: 'Email',
    value: 'jordan@xusall.com'
  }), React.createElement(Select, {
    label: 'Timezone',
    options: ['PT', 'ET', 'GMT']
  }), React.createElement(Button, {
    variant: 'primary',
    style: {
      alignSelf: 'flex-start'
    }
  }, 'Save changes'))), tab === 'Notifications' && React.createElement(Card, null, React.createElement('div', {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, React.createElement('div', {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, React.createElement('span', {
    style: {
      color: 'var(--text-primary)',
      fontSize: 'var(--text-sm)'
    }
  }, 'Product updates'), React.createElement(Switch, {
    checked: true
  })), React.createElement('div', {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, React.createElement('span', {
    style: {
      color: 'var(--text-primary)',
      fontSize: 'var(--text-sm)'
    }
  }, 'Weekly digest'), React.createElement(Switch, {
    checked: false
  })))), tab === 'Security' && React.createElement(Card, null, React.createElement('div', {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, React.createElement(Checkbox, {
    label: 'Require 2FA on login',
    checked: true
  }), React.createElement(Checkbox, {
    label: 'Allow API access tokens',
    checked: false
  }))));
}
window.SettingsView = SettingsView;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app-shell/SettingsView.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app-shell/Sidebar.jsx
try { (() => {
const {
  Icon,
  Badge
} = window.XUsAllDesignSystem_c7bd25;
function Sidebar({
  active,
  onSelect
}) {
  const items = [{
    key: 'home',
    label: 'Home',
    icon: 'layout-dashboard'
  }, {
    key: 'projects',
    label: 'Projects',
    icon: 'folder'
  }, {
    key: 'activity',
    label: 'Activity',
    icon: 'activity'
  }, {
    key: 'settings',
    label: 'Settings',
    icon: 'settings'
  }];
  return React.createElement('div', {
    style: {
      width: 220,
      background: 'var(--surface-1)',
      borderRight: '1px solid var(--border-subtle)',
      display: 'flex',
      flexDirection: 'column',
      padding: 'var(--space-5)',
      gap: 'var(--space-6)',
      fontFamily: 'var(--font-body)',
      height: '100%',
      boxSizing: 'border-box'
    }
  }, React.createElement('div', {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, React.createElement('span', {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-bold)',
      fontSize: 'var(--text-xl)',
      letterSpacing: 'var(--tracking-tight)',
      color: '#fff'
    }
  }, 'XUsAll'), React.createElement(Badge, {
    tone: 'accent'
  }, 'Beta')), React.createElement('div', {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 2
    }
  }, items.map(it => React.createElement('div', {
    key: it.key,
    onClick: () => onSelect(it.key),
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      padding: '9px 10px',
      borderRadius: 'var(--radius-md)',
      cursor: 'pointer',
      background: active === it.key ? 'var(--surface-3)' : 'transparent',
      color: active === it.key ? '#fff' : 'var(--text-secondary)',
      fontSize: 'var(--text-sm)'
    }
  }, React.createElement(Icon, {
    name: it.icon,
    size: 17
  }), it.label))), React.createElement('div', {
    style: {
      marginTop: 'auto',
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, React.createElement('div', {
    style: {
      width: 32,
      height: 32,
      borderRadius: '50%',
      background: 'var(--accent-primary)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#000',
      fontWeight: 'var(--weight-bold)',
      fontSize: 'var(--text-xs)'
    }
  }, 'JD'), React.createElement('div', {
    style: {
      fontSize: 'var(--text-xs)',
      color: 'var(--text-secondary)'
    }
  }, 'Jordan Diaz')));
}
window.Sidebar = Sidebar;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app-shell/Sidebar.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Tabs = __ds_scope.Tabs;

})();
