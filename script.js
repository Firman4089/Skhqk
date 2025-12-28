// ===== UTILITY FUNCTIONS =====
function formatTime(seconds) {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${String(hrs).padStart(2, '0')}:${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}

function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
        <i class="fas fa-${type === 'success' ? 'check-circle' : 'exclamation-circle'}"></i>
        <span>${message}</span>
    `;
    document.body.appendChild(notification);
    
    setTimeout(() => notification.classList.add('show'), 10);
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// ===== NOTIFICATION STYLES =====
const style = document.createElement('style');
style.textContent = `
    .notification {
        position: fixed;
        top: 20px;
        right: 20px;
        background: white;
        padding: 15px 25px;
        border-radius: 10px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        display: flex;
        align-items: center;
        gap: 15px;
        z-index: 10000;
        transform: translateX(150%);
        transition: transform 0.3s ease;
    }
    
    .notification.show {
        transform: translateX(0);
    }
    
    .notification.success {
        border-left: 4px solid #4cd964;
    }
    
    .notification.error {
        border-left: 4px solid #FF6B6B;
    }
    
    .notification i {
        font-size: 1.5rem;
    }
    
    .notification.success i {
        color: #4cd964;
    }
    
    .notification.error i {
        color: #FF6B6B;
    }
    
    @media (max-width: 480px) {
        .notification {
            left: 20px;
            right: 20px;
            transform: translateY(-150%);
        }
        
        .notification.show {
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);